import React from 'react';
import Dashboard from '../Dashboard';
import { Link, Head } from '@inertiajs/react';

function Detail({ auth, title, categories }) {
  //   console.log(categories);
  return (
    <>
      <Head title={title} />
      <Dashboard auth={auth}>
        <div className="py-4 mt-4 overflow-x-auto ms-5 max-w-full mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-3xl">{title}</h2>
          </div>
          {/* {categories.map((category, i) => console.log('category', category))} */}
        </div>
        {categories.length > 0 ? (
          categories.map((category, i) => (
            <div key={i} className="min-w-full p-5 md:flex md:flex-col">
              <div className="shadow-xl card lg:card-side bg-base-100">
                <figure>
                  <img
                    src={`/storage/CatergoryLogo/${category.image}`}
                    alt={category.name}
                    className="transition-all duration-300 cursor-pointer w-100 h-96 hover:scale-125 hover:opacity-70"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{category.name}</h2>
                  {console.log('category', category)}
                  <p className="max-w-lg text-justify">{category.created_at}</p>
                  <p className="max-w-lg text-justify">{category.slug}</p>
                  <div className="justify-end card-actions">
                    <Link href={route('table.index')}>
                      <button className="btn btn-outline btn-secondary">
                        <span className="material-symbols-outlined text-gray-400">arrow_back</span>
                        Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Cagori tidak ada</p>
        )}
      </Dashboard>
    </>
  );
}

export default Detail;
