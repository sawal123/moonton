<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Models\SubcriptionPlan;
use App\Http\Controllers\Controller;
use App\Models\UserSubcription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class SubcriptionPlanController extends Controller
{
    public function index()
    {
        $subcriptionPlans = SubcriptionPlan::all();
        // return $subcriptionPlans;
        return inertia('User/Dashboard/SubcriptionPlan/Index', [
            'subcriptionPlans' => $subcriptionPlans
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
            'payment_status' => 'success'
        ];
        $userSybcription = UserSubcription::create($data);
        return redirect(route('user.dashboard.index'));
    }
}
