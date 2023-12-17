<?php

namespace App\Http\Controllers\User;


use Midtrans;
use Carbon\Carbon;
use Midtrans\Snap;
use Midtrans\Config;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\SubcriptionPlan;
use App\Models\UserSubcription;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SubcriptionPlanController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVERKEY');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = false;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = false;
    }
    public function index()
    {
        $subcriptionPlans = SubcriptionPlan::all();
        // dd($subcriptionPlans);
        return inertia('User/Dashboard/SubcriptionPlan/Index', [
            'subcriptionPlans' => $subcriptionPlans,
            'userSubcription' => null
        ]);
    }



    public function userSubcribe(Request $request, SubcriptionPlan $subcriptionPlan)
    {
        // return $subcriptionPlan;
        $data = [
            'user_id' => Auth::user()->id,
            'subcription_plan_id' => $subcriptionPlan->id,
            'price' => $subcriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subcriptionPlan->active_period_in_months),
            'payment_status' => 'pending'
        ];
        // dd($data);
        $userSubcription = UserSubcription::create($data);

        $params = [
            'transaction_details' => [
                'order_id' => $userSubcription->id . '-' . Str::random(5),
                'gross_amount' => $userSubcription->price
            ]
        ];

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        // dd($snapToken);
        $userSubcription->update([
            'snap_token' => $snapToken
        ]);
        
        return inertia('User/Dashboard/SubcriptionPlan/Index', [
            'userSubcription' => $userSubcription
        ]);
    }


    public function midtransCallback(Request $request)
    {
        $notif = new Midtrans\Notification();

        $transaction_status = $notif->transaction_status;
        $fraud = $notif->fraud_status;

        $transaction_id = explode('-', $notif->order_id)[0];
        $userSubscription = UserSubcription::find($transaction_id);

        if ($transaction_status == 'capture') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'challenge'
                $userSubscription->payment_status = 'pending';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'success'
                $userSubscription->payment_status = 'paid';
                $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subcriptionPlan->active_period_in_months);
            }
        }
        else if ($transaction_status == 'cancel') {
            if ($fraud == 'challenge') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
            else if ($fraud == 'accept') {
                // TODO Set payment status in merchant's database to 'failure'
                $userSubscription->payment_status = 'failed';
            }
        }
        else if ($transaction_status == 'deny') {
            // TODO Set payment status in merchant's database to 'failure'
            $userSubscription->payment_status = 'failed';
        }
        else if ($transaction_status == 'settlement') {
            // TODO set payment status in merchant's database to 'Settlement'
            $userSubscription->payment_status = 'paid';
            $userSubscription->expired_date = Carbon::now()->addMonths((int) $userSubscription->subcriptionPlan->active_period_in_months);
        }
        else if ($transaction_status == 'pending') {
            // TODO set payment status in merchant's database to 'Pending'
            $userSubscription->payment_status = 'pending';
        }
        else if ($transaction_status == 'expire') {
            // TODO set payment status in merchant's database to 'expire'
            $userSubscription->payment_status = 'failed';
        }

        $userSubscription->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Payment success'
        ]);
    }
}
