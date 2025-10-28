<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

class ImageController extends Controller
{
    public function uploadImage(Request $request)
    {
        if ($request->hasFile('image')) {
            $file = $request->file('image');

            // Generate unique name
            $filename = 'user_' . auth()->id() . time() . '.' . $file->getClientOriginalName();

            // Đọc và xử lý ảnh
            $image = Image::read($file);

            $image->resize(800, null);

            $encoded = $image->encodeByExtension(
                $file->getClientOriginalExtension(),
                quality: 70
            );

            // Lưu vào storage/app/public/images
            Storage::disk('public')->put('images/' . $filename, $encoded);

            // Tạo URL đầy đủ
            $url = asset('storage/images/' . $filename);

            return response()->json(['url' => $url]);
        }

        return response()->json(['error' => 'No image uploaded'], 400);
    }
}
