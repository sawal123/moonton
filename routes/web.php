<?php

use Inertia\Inertia;
use App\Models\SubcriptionPlan;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubcriptionPlanController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\MovieController as AdminController;

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



Route::post('midtrans/notification', [SubcriptionPlanController::class, 'midtransCallback']);


Route::get('user', function () {
    return "Hi, user";
})->middleware('role:user');

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('checkUserSubcription:true');
    Route::get('/subcription-plan', [SubcriptionPlanController::class, 'index'])->name('subcriptionPlane.index')->middleware('checkUserSubcription:false');
    Route::post('/subcription-plan/{subcriptionPlan}/user-subcribe', [SubcriptionPlanController::class, 'userSubcribe'])->name('subcriptionPlane.userSubscribe');
});
// ->middleware('checkUserSubcription:true')

Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::get('/', function () {
        return "Hi, Admin";
    })->middleware('role:admin');
    Route::resource('movie', AdminController::class);
    Route::put('movie/{movie}/restore', [AdminController::class, 'restore'])->name('movie.restore');
    // Route::resource('movie/create', AdminController::class);
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
