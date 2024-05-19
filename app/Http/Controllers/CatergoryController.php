<?php

namespace App\Http\Controllers;

use App\Models\CategoryFilm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CatergoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $categories = CategoryFilm::orderBy('created_at', 'desc')->paginate(3);
         return Inertia::render('Table/Table', ['title' => 'Catergory', 'categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Table/Create', ['title' => 'Form']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $validated = $request->input();

        if($request->hasFile('image')){
            $image = $request->file('image');
            $image_name =time().'.'.$image->getClientOriginalExtension();
            $image->storeAs('CatergoryLogo', $image_name, 'public');
            $validated['image'] = $image_name;
            $validated['slug'] = Str::slug($request->name);
            CategoryFilm::create($validated);
        } else {
            CategoryFilm::created($request->all());
        }
       
        session()->flash('message', 'Category created successfully');

        return redirect()->route('table.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $categories = CategoryFilm::find($id);
        return Inertia::render('Table/Detail', ['title' => 'Detail', 'categories' => [$categories->toArray()]]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Table/Edit', ['title' => 'Edit', 'category' => CategoryFilm::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($request->all());
       
        $category = CategoryFilm::find($id);

        $validated = $request->validate([
            'name' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $validated = $request->except('image');
    
        if ($request->hasFile('image')) {
            $oldImage = CategoryFilm::find($id)->image;
            Storage::delete('public/CatergoryLogo/'.$oldImage);
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalExtension();
            $image->storeAs('CatergoryLogo', $imageName, 'public');
            $validated['image'] = $imageName;
            $validated['slug'] = Str::slug($request->name);
            $category->update($validated);
        } else {
            $validated['slug'] = Str::slug($request->name);
            $category->update($validated);
        }

        session()->flash('message', 'Category updated successfully');
     
        return redirect()->route('table.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = CategoryFilm::find($id);
        if($category->image){
            Storage::delete('public/CatergoryLogo/'.$category->image);
        }
        $category->delete();

        session()->flash('message', 'Category deleted successfully');

        return redirect()->route('table.index');
    }
}
