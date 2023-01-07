<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ConvidadoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Home/Index');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/convidados/create', [ConvidadoController::class, 'create'])->name('convidados.create');
    Route::get('/convidados', [ConvidadoController::class, 'index'])->name('convidados.index');
    Route::post('/convidados', [ConvidadoController::class, 'store'])->name('convidados.store');
});

require __DIR__ . '/auth.php';
