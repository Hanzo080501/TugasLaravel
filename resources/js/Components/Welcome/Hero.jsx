import React from 'react';

function Hero() {
  return (
    <>
      <section className="py-12 text-center text-white bg-zinc-800">
        <h2 className="mb-4 text-2xl font-bold">Sign Up for Unlimited Access</h2>
        <p className="mb-6">
          Already have an account?{' '}
          <a href="#" className="text-blue-500">
            Sign In
          </a>
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 text-white rounded-md bg-zinc-700"
        />
        <button className="px-6 py-3 ml-2 btn btn-outline btn-secondary rounded-lg">
          Subscribe
        </button>
      </section>

      <section className="py-12">
        <h2 className="mb-8 text-3xl font-bold text-center">Featured Content</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-4 text-white rounded-lg bg-zinc-800">Trending Now</div>
          <div className="p-4 text-white rounded-lg bg-zinc-800">New Releases</div>
          <div className="p-4 text-white rounded-lg bg-zinc-800">Top Picks</div>
        </div>
      </section>

      <section className="py-12 text-center text-white bg-zinc-900">
        <h2 className="mb-8 text-3xl font-bold">What Our Users Say</h2>
        <div className="max-w-3xl mx-auto">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec odio ac justo
            ultricies tristique."
          </p>
          <p className="mt-4">- Hanzo</p>
        </div>
      </section>

      <footer className="py-4 text-center text-white bg-zinc-800">
        <nav className="mb-4">
          <a href="#" className="mx-2">
            Terms of Use
          </a>
          <a href="#" className="mx-2">
            Privacy Policy
          </a>
        </nav>
        <div>
          <a href="#" className="mx-2 text-white hover:text-zinc-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="mx-2 text-white hover:text-zinc-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2 text-white hover:text-zinc-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Hero;
