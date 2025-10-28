<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\QuoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/auth-user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/quote', [QuoteController::class, 'store'])->middleware('auth:api');
Route::get('/quote', [QuoteController::class, 'index'])->middleware('auth:api');
Route::post('/upload-image', [ImageController::class, 'uploadImage'])->middleware('auth:api');
