<?php

namespace App\Http\Controllers;
use App\Models\Ingatlanok;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IngatlanController extends Controller
{
    public function index(){
        $Ingatlanoks =  Ingatlanok::all();
        return $Ingatlanoks;
    }

    public function store(Request $request)
    {
        $Ingatlan = new Ingatlan();
        $Ingatlan->leiras = $request->leiras;
        $Ingatlan->hirdetesDatuma = $request->hirdetesDatuma;
        $Ingatlan->tehermentes = $request->tehermentes;
        $Ingatlan->ar = $request->ar;
        $Ingatlan->kepURL = $request->kepURL;
        $Ingatlan->save();
    }

    public function destroy(Request $request)
    {
        Ingatlan::find($request->id)->delete();
    }
}

