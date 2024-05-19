import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';
import Hero from '@/Components/Welcome/Hero';
import Started from '@/Components/Welcome/Started';

export default function Welcome({ auth, title, films, children }) {
  return (
    <>
      <Head title={title} />
      {/* <div className="relative min-h-screen bg-gray-100 bg-center sm:flex sm:justify-center sm:items-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div className="container flex items-center justify-between px-6 overflow-x-auto sm:fixed sm:top-0 text-end">
          <Link>
            <ApplicationLogo className="w-16 h-16 py-3 text-gray-500 fill-current" />
          </Link>
          <div>
            {auth.user ? (
              <Link
                href={route('dashboard')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href={route('login')}
                  className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                  Log in
                </Link>

                <Link
                  href={route('register')}
                  className="font-semibold text-gray-600 ms-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="w-full overflow-hidden bg-white shadow-md">
          <Hero />
        </div>
      </div> */}
      <div className="text-white">
        <div
          className="relative min-w-full min-h-screen bg-center bg-no-repeat bg-cover shadow-lg"
          style={{
            backgroundImage:
              'url(https://www.sitnas.id/uploads/large/0b8801873389563071d89d9330d7930e.png)',
          }}>
          <header className="flex items-center justify-between px-6 py-4">
            <Link>
              <ApplicationLogo className="h-10 fill-current" />
            </Link>
            <nav>
              {/* <a href="#" className="mx-2">
                Home
              </a>
              <a href="#" className="mx-2">
                TV Shows
              </a>
              <a href="#" className="mx-2">
                Movies
              </a> */}
            </nav>
          </header>
          <Started />
        </div>
        <Hero />
      </div>
    </>
  );
}
