<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class CategoryFilm extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'image',
    ];

    protected static function boot() {
        parent::boot();

        static::saving(function($category) {
            $category->slug = Str::slug($category->name);
        });
    }

    public function films() {
        return $this->hasMany(ListFilm::class);
    }
}
