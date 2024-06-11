<?php

namespace App\Http\Controllers;

use App\Models\User;
<<<<<<< HEAD
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
=======
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
>>>>>>> cada632a16f64760b39ac00c2ffdbefe08f652c0
use Illuminate\Support\Facades\Storage;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    public function redirectToGoogle(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback(Request $request): RedirectResponse
    {
        $googleUser = Socialite::with('google')->user();
<<<<<<< HEAD

        $state = $request->get('state');
        $request->session()->put('state', $state);

        if (Auth::check() == false) {
            session()->regenerate();
        }
=======
>>>>>>> cada632a16f64760b39ac00c2ffdbefe08f652c0

        $user = User::firstOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'google_id' => $googleUser->getId(),
                'signed_in_with' => 'google'
            ]
        );

        $profilePictureUrl = $googleUser->avatar;
        $imageContents = file_get_contents($profilePictureUrl);
        $imageName = $user->id . '.jpg';
        Storage::disk('public')->put($imageName, $imageContents);

        Auth::login($user, true);

        return redirect()->intended('/dashboard');
    }
}
