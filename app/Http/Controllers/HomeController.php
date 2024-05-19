<?php

namespace App\Http\Controllers;

use App\Models\CategoryFilm;
use App\Models\ListFilm;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $films = ListFilm::orderBy('created_at', 'desc');
        return inertia::render('Home/index', [
            'title' => 'Home', 'films' => $films->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function tonton(String $id)
    {
        $films = ListFilm::find($id);
        if(!$films) {
            abort(404);
        }
        $category_id = $films->category_id;
        $relations = ListFilm::where('category_id', $category_id)->where('id', '!=', $id)->get();
        $categories = CategoryFilm::all();
        return Inertia::render('Home/TontonFilm', [
            'title' => 'Tonton', 
            'films' => [$films->toArray()], 
            'relations' => $relations,
            'category_id' => $category_id,
            'categories' => $categories]);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $films = ListFilm::find($id);
        $categories = CategoryFilm::all();
        return Inertia::render('Home/DetailFilm', ['title' => 'Detail', 'films' => [$films->toArray()], 'categories' => $categories]);
    }
}
