<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;


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
            $user->token = $user->createToken('token')->accessToken;
        }

        return response()->json([
            'message' => 'Create user successfully.',
            'user' => $user
        ]);
    }
}
