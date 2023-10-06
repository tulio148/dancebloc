<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\DashboardController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/classes', [ClassesController::class, 'index'])->name('classes');

Route::get('/classes/create', [ClassesController::class, 'create'])->name('classes.create');
Route::get('/classes/{class}', [ClassesController::class, 'show'])->name('classes.show');
Route::delete('/classes/{class}', [ClassesController::class, 'destroy'])->name('classes.destroy');
Route::get('/classes/{class}/enroll', [ClassesController::class, 'enroll'])->name('classes.enroll')->middleware('auth');

Route::post('/class/store', [ClassesController::class, 'store'])->name('class.store');
Route::post('/class/update', [ClassesController::class, 'update'])->name('class.update');

Route::post('/order/store', [OrdersController::class, 'store'])->name('order.store');

Route::post('/payment', [PaymentController::class, 'store'])->name('payment');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/admin', [AdminController::class, 'index'])->middleware(['auth', 'verified', 'admin'])->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
