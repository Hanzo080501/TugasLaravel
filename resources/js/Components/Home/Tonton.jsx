import { Link } from '@inertiajs/react';
import React from 'react';

function Tonton({ films, relations, category_id, categories }) {
  console.log('categories', categories);
  console.log('category_di', category_id);
  console.log('relations', relations);
  console.log('filmsss=>', films);
  return (
    <>
      {films.length > 0
        ? films.map((film, i) => (
            <div
              key={i}
              className="min-h-screen flex flex-col bg-gradient-to-b from-black to-transparent">
              <div
                className="h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(/storage/FilmLogo/${film.image})` }}>
                <div className="h-full justify-end flex flex-col items-center p-4 text-white bg-gradient-to-b from-transparent to-black">
                  <h1 className="text-4xl font-bold mb-4">{film.name}</h1>
                  <div className="flex items-center space-x-3">
                    <Link href={route('home.index')}>
                      <button className="btn btn-outline btn-secondary mt-4">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Back
                      </button>
                    </Link>
                    <button className="btn btn-outline btn-secondary mt-4">
                      <span className="material-symbols-outlined">play_circle</span>
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Related Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relations
                    .filter((rel) => rel.category_id === category_id)
                    .map((relFilm, i) => (
                      <div key={i} className="rounded-[20px] overflow-hidden bg-gray-800">
                        <div className="w-full h-full mb-2 rounded-t group-hover:blur">
                          <Link as="button" href={route('home.tonton', relFilm.id)}>
                            <img
                              src={`/storage/FilmLogo/${relFilm.image}`}
                              alt="Related Movie"
                              className="w-full h-auto hover:blur transition-all duration-300"
                              style={{ objectFit: 'cover' }}
                              loading="lazy"
                            />
                          </Link>
                        </div>
                        <p className="font-bold">{relFilm.name}</p>
                        <p>
                          Genre :
                          <span className="ms-2">
                            {categories
                              .filter((cat) => cat.id == relFilm.category_id)
                              .map((cat) => cat.name)}
                          </span>
                        </p>
                        <p className="font-bold">Rating : {relFilm.rating}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default Tonton;
