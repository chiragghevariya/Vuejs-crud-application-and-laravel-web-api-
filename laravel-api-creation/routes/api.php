<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/info','Api\InfoApiController@index');
Route::post('/info/post','Api\InfoApiController@store');
Route::get('/info/post/{id}','Api\InfoApiController@show');
Route::patch('/info/post/{id}','Api\InfoApiController@update');
Route::delete('/info/post/{id}','Api\InfoApiController@destroy');
