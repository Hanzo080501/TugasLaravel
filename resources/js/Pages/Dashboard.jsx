import { Link, Head } from '@inertiajs/react';
import Sidebar, { SidebarItem } from '@/Components/Sidebar';
import { FilmIcon, Home, LayoutDashboard, LogOutIcon, Table2Icon } from 'lucide-react';
import React from 'react';
import Swicth from '@/Components/swicth';

export default function Dashboard({ auth, title, children }) {
  console.log('auth', auth);
  return (
    <>
      <Head title={title} />
      <div className="flex flex-row w-screen h-screen no-scrollbar">
        <div className="w-[20%] flex inset-0">
          {auth.user.role === 'admin' && (
            <Sidebar auth={auth}>
              <Link as="a" href={route('home.index')}>
                <SidebarItem icon={<Home size={20} />} title="Home" />
              </Link>
              <Link href={route('dashboard')}>
                <SidebarItem
                  icon={<LayoutDashboard size={20} />}
                  title="Dashboard"
                  active={route().current('dashboard')}
                />
              </Link>
              <Link as="a" href={route('table.index')}>
                <SidebarItem
                  icon={<Table2Icon size={20} />}
                  title="Category"
                  active={route().current('table*')}
                />
              </Link>
              <Link as="a" href={route('film.index')}>
                <SidebarItem
                  icon={<FilmIcon size={20} />}
                  title="ListFilm"
                  active={route().current('film*')}
                />
              </Link>
              <Link as="button" href={route('logout')} method="post">
                <SidebarItem icon={<LogOutIcon size={20} />} />
              </Link>
              <hr className="my-3" />
              <div className="flex mb-5 ms-2">
                <Swicth />
              </div>
            </Sidebar>
          )}
        </div>

        <div className="flex-1 justify-center overflow-y-scroll flex min-W-full">
          <div className="sticky mt-6 flex">
            <h1 className="gap-2 text-3xl">{title}</h1>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
