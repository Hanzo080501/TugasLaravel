import Detail from '@/Components/Home/Detail';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import React from 'react';

function DetailFilm({ auth, title, films, categories }) {
  return (
    <>
      <Head title={title} />
      <header className="container fixed top-0 z-20 flex items-center max-w-full px-10">
        <Navbar className="w-full" auth={auth} />
      </header>
      <main>
        <Detail data={films} categorys={categories} />
      </main>
    </>
  );
}

export default DetailFilm;
