<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Models\SubcriptionPlan;
use App\Http\Controllers\Controller;

class SubcriptionPlanController extends Controller
{
    public function index(){
        $subcriptionPlans = SubcriptionPlan::all();
        // return $subcriptionPlans;
        return inertia('User/Dashboard/SubcriptionPlan/Index',[
            'subcriptionPlans'=> $subcriptionPlans
        ]);
    }
    public function userSubcribe(Request $request, SubcriptionPlan $subcriptionPlan){
        return $subcriptionPlan;
    }
}
