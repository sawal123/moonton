<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    
  public function index(){
    return Inertia::render('User/Dashboard/Index');
  }
}
