import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Dashboard from '../Dashboard';
import Pagination from '@/Components/Paginator';
import FlashMessage from '@/Components/FlashMessage';

function Table({ auth, title, categories }) {
  return (
    <>
      <Head title={title} />
      <Dashboard auth={auth}>
        <FlashMessage />
        <div className="min-w-full mt-6 overflow-x-auto ">
          <div className="sticky flex items-center justify-between max-w-full px-10 mb-3">
            <h2 className="text-3xl">{title}</h2>
            <Link
              as="button"
              href={route('table.create')}
              className="items-center gap-2 btn btn-outline btn-secondary d-flex"
              type="button">
              <span className="material-symbols-outlined">add</span>
              Create new
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center min-w-full">
          <div className="grid">
            <div className="col-span-1">
              <div className="flex flex-col py-10">
                <table className="min-w-full border border-collapse border-gray-100 glass">
                  <thead className="text-white bg-gray-800">
                    <tr>
                      <th className="px-2 py-3 col traking-wider">No</th>
                      <th className="px-2 py-3 col">Cover</th>
                      <th className="px-2 py-3 col">Title</th>
                      <th className="px-2 py-3 col">Releas</th>
                      <th className="px-2 py-3 col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.data.length > 0 ? (
                      categories.data.map((category, i) => (
                        <tr key={i} className="border-b ">
                          <td className="py-3 lg:px-20">{i + 1}</td>
                          <td className="overflow-hidden whitespace-nowrap">
                            <img
                              src={`storage/CatergoryLogo/${category.image}`}
                              className="transition-all duration-300 rounded-full w-14 h-14 hover:scale-125"
                              alt="Category"
                            />
                          </td>
                          <td className="py-3 lg:px-20 whitespace-nowrap">{category.name}</td>
                          <td className="py-3 lg:px-20 whitespace-nowrap">{category.created_at}</td>
                          <td className="py-3 lg:px-20 whitespace-nowrap">
                            <Link
                              as="button"
                              href={route('table.edit', category.id)}
                              className="rounded-r btn outline outline-1 outline-secondary hover:bg-yellow-400 d-flex"
                              type="button">
                              <span className="material-symbols-outlined">edit</span>
                            </Link>
                            <Link
                              as="button"
                              href={route('table.show', category.id)}
                              className="rounded-none btn outline outline-1 outline-secondary hover:bg-purple-600 d-flex"
                              type="button">
                              <span className="material-symbols-outlined">visibility</span>
                            </Link>
                            <Link
                              as="button"
                              href={route('table.destroy', category.id)}
                              method="delete"
                              className="rounded-l btn outline outline-1 outline-secondary hover:bg-red-500 d-flex"
                              type="button">
                              {() => confirm('Are you sure you want to delete this category?')}
                              <span className="material-symbols-outlined">delete</span>
                            </Link>
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
                <div className="flex items-center justify-center mt-5">
                  <Pagination pager={categories} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
}

export default Table;
