<?php

use Illuminate\Http\Request;
use App\Events\PrivateEventExample;
use Illuminate\Support\Facades\Route;

Route::post('/realtime', function () {
    info('Broadcasting event');
    broadcast(new PrivateEventExample());
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
