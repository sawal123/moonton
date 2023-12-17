<?php

namespace App\Http\Controllers\User;


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
}
