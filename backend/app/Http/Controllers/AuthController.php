<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Auth;



class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        if ($user) {
            $token = $user->createToken('accessToken')->accessToken;
        }

        return response()->json([
            'message' => 'Create user successfully.',
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Login successful
            $user = Auth::user();
            $token = $user->createToken('token')->accessToken;
            return response()->json([
                'message' => 'Login successful',
                'user' => $user,
                'accessToken' => $token
            ]);
        } else {
            // Login failed
            return response()->json([
                'message' => 'Invalid email or password!'
            ], 401);
        }
    }

    public function getUser() {}
}
