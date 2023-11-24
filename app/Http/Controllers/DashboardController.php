<?php

namespace App\Http\Controllers;

use App\Models\Movie;

use Inertia\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

  public function index()
  {
    $feature = Movie::whereIsFeatured(true)->get();
    $movie = Movie::all();
    // dd($feature);
    // return [
    //   'featuredMoviews'=> $feature,
    //   'movies'=> $movie
    // ];
    return inertia('User/Dashboard/Index', [
      'featureMovie' => $feature,
      'movie' => $movie
    ]);
  }
}
