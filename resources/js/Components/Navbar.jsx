import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Swicth from './Swicth';

function Navbar({ auth }) {
  console.log(auth);
  return (
    <>
      <div className="navbar">
        <div className="flex-1 space-x-5">
          <Link>
            <ApplicationLogo className="w-16 py-2 fill-current h-14" />
          </Link>
          {auth.user.role === 'admin' && <Link href={route('dashboard')}>Dashboard</Link>}
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="w-24 input input-bordered md:w-auto"
            />
          </div>
          <div className="flex mx-5">
            <Swicth />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link href={route('profile.edit')}>
                  <p className="justify-between">
                    {auth.user.name}
                    <span className="badge">New</span>
                  </p>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link as="button" href={route('logout')} method="POST">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
