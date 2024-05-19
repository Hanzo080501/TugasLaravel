import React from 'react';
import { Link, Head, useForm, usePage } from '@inertiajs/react';
import Dashboard from '../Dashboard';

function Edit({ auth, title }) {
  const { category } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    name: category.name || '',
    image: '',
    id: category.id || '',
    _method: 'PUT',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('table.update', category.id));
  };

  return (
    <>
      <Head title={title} />
      <Dashboard auth={auth}>
        <div className="flex flex-wrap justify-center w-[100%] mb-2 py-12">
          <div className="w-full flex justify-between items-center mb-10">
            <div className="sm:w-1/2">
              <h1 className="text-3xl">{title} Page</h1>
            </div>
            <div className="pl-4 sm:w-1/2">
              <ol className="flex flex-wrap items-center rounded list-reset sm:float-right">
                <li className="inline-block px-2 py-2 text-gray-300">
                  <a href="#">{title}</a>
                </li>
                <li>
                  <div>&#x2F;</div>
                </li>
                <li className="inline-block px-2 py-2 text-gray-400 active">{title} Page</li>
              </ol>
            </div>
          </div>
          <form onSubmit={submit} encType="multipart/form-data">
            <fieldset>
              <div className="mb-3 form-control">
                <label htmlFor="name" className="label">
                  Nama Category
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full max-w-xs input input-bordered"
                  onChange={(e) => setData('name', e.target.value)}
                  defaultValue={data.name}
                  required
                  autoFocus
                  autoComplete="name"
                  name="name"
                  id="name"
                  disabled={processing}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
              </div>
              <div className="form-control">
                <label htmlFor="image" className="label">
                  Masukan Gambar
                </label>
                <input
                  type="file"
                  className="w-full max-w-xs file-input file-input-bordered file-input-secondary"
                  onChange={(e) => setData('image', e.target.files[0])}
                  name="image"
                  id="image"
                  disabled={processing}
                  aria-invalid={errors.image ? 'true' : 'false'}
                />
              </div>
            </fieldset>
            <div className="flex mt-6 space-x-3">
              <button className="btn btn-secondary" type="submit" disabled={processing}>
                Submit
              </button>
              <Link as="button" href={route('table.index')}>
                <button
                  className="btn btn-outline btn-secondary"
                  type="submit"
                  disabled={processing}>
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </Dashboard>
    </>
  );
}

export default Edit;
