<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\User\MovieController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('admin', function () {
    return "Hi, Admin";
})->middleware('role:admin');

Route::get('user', function () {
    return "Hi, user";
})->middleware('role:user');

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
});

Route::prefix('prototype')->name('prototype')->group(function () {
    Route::get('/login', function () {
        return inertia::render('Prototype/Login');
    })->name('.login');

    Route::get('/register', function () {
        return inertia::render('Prototype/Register');
    })->name('.register');
     Route::get('/dashboard', function () {
        return inertia::render('Prototype/Dashboard');
    })->name('.dashboard');
    Route::get('/subcriptionPlan', function () {
        return inertia::render('Prototype/subcriptionPlan');
    })->name('.subcriptionPlan');

    Route::get('/movie/{slug}', function () {
        return inertia::render('Prototype/Movie/Show');
    })->name('.movie.show');
});



// Route::get('/dashboard', function () {
//     return Inertia::render('User/Dashboard/Index');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
