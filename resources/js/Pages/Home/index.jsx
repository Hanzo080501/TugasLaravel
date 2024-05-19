import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Content from '@/Components/Home/Content';
import Navbar from '@/Components/Navbar';

function Home({ title, films, auth, categories, children }) {
  // console.log(films);
  return (
    <div>
      <Head title={title} />
      <header className="container fixed top-0 z-20 flex items-center max-w-full px-10 bg-base-100">
        <Navbar className="w-full" auth={auth} />
      </header>
      <main className="mt-[7%]">
        <Content className="container mx-auto" data={films} />
      </main>
    </div>
  );
}

export default Home;
