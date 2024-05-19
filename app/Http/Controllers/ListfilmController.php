<?php

namespace App\Http\Controllers;

use App\Models\CategoryFilm;
use App\Models\ListFilm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ListfilmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $films = ListFilm::orderBy('created_at', 'desc')->paginate(10);
        $categories = CategoryFilm::all();
        return Inertia::render('Film/Film', [
            'title' => 'List Film', 'films' => $films, 'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Film/Create', [
            'title' => 'Form', 'categories' => CategoryFilm::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required',
            'description' => 'required|string|max:1000',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $validated = $request->all();

        if($request->hasFile('image')){
            $image = $request->file('image');
            $image_name =time().'.'.$image->getClientOriginalExtension();
            $image->storeAs('FilmLogo', $image_name, 'public');
            $validated['image'] = $image_name;
            ListFilm::create($validated);
        } else {
            ListFilm::created($request->all());
        }
        session()->flash('message', 'Film created successfully');
        return redirect()->route('film.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $films = ListFilm::find($id);
        return Inertia::render('Film/Detail', [
            'title' => 'Detail', 'films' => [$films->toArray()], 'categories' => CategoryFilm::all()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Film/Edit', [
            'title' => 'Edit', 'film' => ListFilm::find($id), 'categories' => CategoryFilm::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //  dd($request->all());
        $film = ListFilm::find($id);

         $request->validate([
            'name' => 'required',
            'description' => 'required|string|max:1000',
            'category_id' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $validated = $request->all();
        $validated = $request->except('image');
        if($request->hasFile('image')){
            $oldImage = ListFilm::find($id)->image;
            Storage::delete('public/FilmLogo/'.$oldImage);
            $image = $request->file('image');
            $imageName =time().'.'.$image->getClientOriginalExtension();
            $image->storeAs('FilmLogo', $imageName, 'public');
            $validated['image'] = $imageName;
            $film->update($validated);
        } else {
            $film->update($validated);
        }
        session()->flash('message', 'Film updated successfully');
        return redirect()->route('film.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $film = ListFilm::find($id);
        if($film->image){
            Storage::delete('public/FilmLogo/'.$film->image);
        }
        $film->delete();
        session()->flash('message', 'Film deleted successfully');
        return redirect()->route('film.index');
    }
}
