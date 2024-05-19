import React from 'react';
import { Link } from '@inertiajs/react';
function Started() {
  return (
    <>
      <section className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Watch Unlimited Movies & TV Shows</h1>
          <p className="mb-6 text-lg md:text-xl">Join now and enjoy a wide range of content.</p>
          <Link href={route('login')}>
            <button className="px-6 py-3 btn btn-outline btn-secondary rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-900"></div>
    </>
  );
}

export default Started;
