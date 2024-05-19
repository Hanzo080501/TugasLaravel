import { Link, Head } from '@inertiajs/react';
import React from 'react';

function Detail({ title, data, categorys }) {
  console.log('categorys', categorys);
  console.log('films', data);
  return (
    <>
      <Head title={title} />

      <div className="h-screen flex flex-col">
        {data.length > 0
          ? data.map((film, i) => (
              <div
                key={i}
                className="h-screen w-screen bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(/storage/FilmLogo/${film.image})`,
                }}>
                <div className="p-6 flex flex-col justify-end text-gray-400 h-full w-full bg-gradient-to-b from-transparent to-black">
                  <div className="flex space-x-2 py-3">
                    <Link href={route('home.index')}>
                      <button className="btn btn-outline btn-secondary">
                        <span className="material-symbols-outlined text-gray-400">arrow_back</span>
                        Back
                      </button>
                    </Link>
                    <Link href={route('home.tonton', film.id)}>
                      <button className="btn btn-outline btn-secondary flex">
                        <span className="material-symbols-outlined text-gray-400">play_circle</span>
                        Watch
                      </button>
                    </Link>
                  </div>
                  <h1 className="text-3xl font-bold">{film.name}</h1>
                  <p className="text-lg my-4">{film.description}</p>
                  <p className="flex space-x-2">
                    <strong className="mr-2">Genre :</strong>
                    {categorys.filter((cat) => cat.id == film.category_id).map((cat) => cat.name)}
                  </p>
                  <p className="mr-2">
                    <strong>Cast :</strong> Emily Blunt as Sarah Thompson, Jacob Tremblay as Alex
                  </p>
                  <p className="mr-2">
                    <strong>Director :</strong> David Ayer
                  </p>
                  <p className="mr-2">
                    <strong>Release Year :</strong> {film.created_at}
                  </p>
                  <p className="mr-2">
                    <strong>Duration :</strong> 110 minutes
                  </p>
                  <p className="mr-2">
                    <strong>Rating :</strong> PG-13
                  </p>
                  <p className="mr-2">
                    <strong>Tagline :</strong> "Some secrets are better left undiscovered."
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default Detail;
