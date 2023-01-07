<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Convidado;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class ConvidadoController extends Controller
{
    public function index()
    {
        $usuario = Auth::user();

        $convidados = Convidado::where('users_id', $usuario->id)->get();

        return Inertia::render('Convidados/Index', ['convidados' => $convidados], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => "required",
            'email' => "required",
            'total_pessoas' => "required",
        ]);

        $usuario = Auth::user();

        $convidado = new Convidado;
        $convidado->nome = $request->input('nome');
        $convidado->email = $request->input('email');
        $convidado->total_pessoas = $request->input('total_pessoas');
        $convidado->users_id = $usuario->id;
        $convidado->auth_key = base64_encode(Str::random(64));
        $convidado->total_pessoas = $request->input('total_pessoas');
        $convidado->save();

        return redirect(route('convidados.index'));
    }
}
