import React from 'react';
import { Link, Head } from '@inertiajs/react';
function Content({ data }) {
  console.log('film=>', data);
  return (
    <>
      <div className="container sm:mx-auto mx-auto max-w-[85%] mt-9 p-5">
        <div className="grid items-center justify-center grid-cols-1 gap-4 mx-[2%] sm:grid-cols-2 md:grid-cols-4">
          {data.length > 0
            ? data.map((film, i) => (
                <div key={i} className="shadow-xl card h-72 w-72 bg-base-100">
                  <figure>
                    <img
                      src={`/storage/FilmLogo/${film.image}`}
                      alt={film.name}
                      className="object-cover w-full h-40 transition-all duration-300 hover:scale-125 hover:opacity-70"
                    />
                  </figure>
                  <div className="p-4 card-body">
                    <h2 className="mb-2 text-lg font-bold card-title">{film.name}</h2>
                    <p className="mb-2 text-sm text-zinc-600">
                      {film.description.substring(0, 50)}...
                    </p>
                    <div className="flex justify-between">
                      <a href="#" className="badge badge-secondary">
                        NEW
                      </a>
                      <div className="card-actions">
                        <Link className="badge badge-outline" href={route('home.tonton', film.id)}>
                          Tonton
                        </Link>
                        <Link className="badge badge-outline" href={route('home.show', film.id)}>
                          Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Content;
