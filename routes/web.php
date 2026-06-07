<?php

use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Portfolio')->name('home');

Route::inertia('/portfolio', 'Portfolio')->name('portfolio');

Route::post('/contact/build-request', function (Request $request) {
    $data = $request->validate([
        'message' => ['required', 'string', 'min:10', 'max:3000'],
    ]);

    Mail::raw($data['message'], function ($message) {
        $message
            ->to('jianlestertabarno2014@gmail.com')
            ->subject('New Portfolio Build Request');
    });

    return back();
})->name('contact.build-request');

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::inertia('dashboard', 'Dashboard')->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
});

require __DIR__.'/settings.php';
