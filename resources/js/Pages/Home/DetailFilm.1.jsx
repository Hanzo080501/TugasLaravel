import Detail from '@/Components/Home/Detail';
import React from 'react';

export function DetailFilm({ auth }) {
  return (
    <>
      <Head title="Detail Film" />
      <header className="container fixed top-0 z-20 flex items-center max-w-full px-10 bg-base-100">
        <Navbar className="w-full" auth={auth} />
      </header>
      <Detail title="Detail Film" />
    </>
  );
}
