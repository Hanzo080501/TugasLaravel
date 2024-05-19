import Tonton from '@/Components/Home/Tonton';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import React from 'react';

function TontonFilm({ auth, title, films, relations, category_id, categories }) {
  return (
    <>
      <Head title={title} />
      <header className="container fixed top-0 z-20 flex items-center max-w-full px-10">
        <Navbar className="w-full" auth={auth} />
      </header>
      <main>
        <Tonton
          films={films}
          relations={relations}
          category_id={category_id}
          categories={categories}
        />
      </main>
    </>
  );
}

export default TontonFilm;
