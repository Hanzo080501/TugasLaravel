import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard';
import { Link, Head } from '@inertiajs/react';

function Detail({ auth, title, films, categories }) {
  console.log('films', films);
  console.log('categories', categories);
  return (
    <>
      <Head title={title} />
      <Dashboard auth={auth}>
        <div className="py-4 mt-4 overflow-x-auto ms-5 max-w-full mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-3xl">{title} Film</h2>
          </div>
        </div>
        {films.length > 0
          ? films.map((film, i) => (
              <div key={i} className="min-w-full p-5 md:flex md:flex-col">
                {console.log('filmsss=>', film)}
                <div className="overflow-x-hidden shadow-xl card lg:card-side bg-base-100">
                  <figure>
                    <img
                      src={`/storage/FilmLogo/${film.image}`}
                      alt={film.name}
                      className="transition-all duration-300 cursor-pointer w-100 h-96 hover:scale-125 hover:opacity-70"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{film.name}</h2>
                    <p className="max-w-lg text-justify">{film.description}</p>
                    <p className="max-w-lg text-justify">
                      {categories
                        .filter((cat) => cat.id == film.category_id)
                        .map((cat) => cat.name)}
                    </p>
                    <p className="max-w-lg text-justify">{film.created_at}</p>
                    <div className="justify-end card-actions">
                      <Link href={route('film.index')}>
                        <button className="btn btn-outline btn-secondary">
                          <span className="material-symbols-outlined text-gray-400">
                            arrow_back
                          </span>
                          Back
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
        <div></div>
      </Dashboard>
    </>
  );
}

export default Detail;
