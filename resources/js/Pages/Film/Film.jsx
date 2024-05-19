import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Dashboard from '../Dashboard';
import Pagination from '@/Components/Paginator';
import FlashMessage from '@/Components/FlashMessage';

function Film({ auth, title, films, categories }) {
  console.log('films', films);
  return (
    <>
      <Head title={title} />
      <Dashboard auth={auth}>
        <FlashMessage />
        <div className="justify-center min-w-full mt-3">
          <div className="sticky flex items-center justify-between max-w-full px-10 py-10 mb-3">
            <h2 className="text-3xl">{title}</h2>
            <Link
              as="button"
              href={route('film.create')}
              className="items-center gap-2 btn btn-outline btn-secondary d-flex"
              type="button">
              <span className="material-symbols-outlined">add</span>
              Create new
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center min-w-full">
          <div className="col-span-1">
            <div className=" ">
              <table className="min-w-full border border-collapse border-gray-100 glass">
                <thead className="text-white bg-gray-800">
                  <tr>
                    <th className="px-2 py-3 col traking-wider">No</th>
                    <th className="px-2 py-3 col">Cover</th>
                    <th className="px-2 py-3 col">Title</th>
                    <th className="px-2 py-3 col">Category</th>
                    <th className="px-2 py-3 col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {films.data.length > 0 ? (
                    films.data.map((film, i) => (
                      <tr key={i} className="border-b ">
                        <td className="py-3 lg:px-20">{i + 1}</td>
                        <td className="overflow-hidden whitespace-nowrap">
                          <img
                            src={`storage/FilmLogo/${film.image}`}
                            className="transition-all duration-300 rounded-full w-14 h-14 hover:scale-125"
                            alt="Category"
                          />
                        </td>
                        <td className="py-3 lg:px-20 whitespace-nowrap">{film.name}</td>

                        <td className="py-3 lg:px-20 ">
                          {categories
                            .filter((category) => category.id == film.category_id)
                            .map((category) => category.name)}
                        </td>

                        <td className="py-3 lg:px-20 whitespace-nowrap">
                          <Link
                            as="button"
                            href={route('film.edit', film.id)}
                            className="rounded-r btn outline outline-1 outline-secondary hover:bg-yellow-400 d-flex"
                            type="button">
                            <span className="material-symbols-outlined">edit</span>
                          </Link>
                          <Link
                            as="button"
                            href={route('film.show', film.id)}
                            className="rounded-none btn outline outline-1 outline-secondary hover:bg-purple-600 d-flex"
                            type="button">
                            <span className="material-symbols-outlined">visibility</span>
                          </Link>
                          <button onClick={() => (confirm('Are you sure?') ? true : false)}>
                            <Link
                              as="button"
                              href={route('film.destroy', film.id)}
                              method="delete"
                              className="rounded-l btn outline outline-1 outline-secondary hover:bg-red-500 d-flex"
                              type="button">
                              <span className="material-symbols-outlined">delete</span>
                            </Link>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-2 text-center">
                        belum ada data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="flex items-center justify-center mt-5">{/* <Pagination /> */}</div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
}

export default Film;
