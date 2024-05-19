import { Link, Head } from '@inertiajs/react';
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import React, { createContext } from 'react';
import { useContext, useState } from 'react';
import ApplicationLogo from './ApplicationLogo';

const SidebarContext = createContext();

function Sidebar({ children, auth }) {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      {/* <Head title={props.title} /> */}
      <aside className="h-screen">
        <nav className="flex flex-col h-full border-r shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <Link href={route('dashboard')}>
              <ApplicationLogo
                className={`overflow-hidden transition-all ${showMenu ? 'w-10' : 'w-0'}`}
              />
            </Link>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-pink-100">
              {showMenu ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
          <SidebarContext.Provider value={{ showMenu }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
          <div className="flex p-3 border-t">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="object-cover w-10 h-10 rounded-full"
            />
            <div
              className={`flex items-center justify-between overflow-hidden transition-all ${
                showMenu ? 'w-52 ml-3' : 'w-0'
              }`}>
              <div className="leading-4">
                <h4 className="font-semibold">{auth.user.name}</h4>
                <span className="text-xs">{auth.user.email}</span>
              </div>
              <Link href={route('profile.edit')}>
                <MoreVertical size={20} />
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

export function SidebarItem({ icon, title, active, alert }) {
  const { showMenu } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center px-3 py-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? 'bg-secondary from-indigo-200 to-indigo-100 text-indigo-800'
          : 'hover:bg-pink-200 text-gray-600'
      }`}>
      {icon}
      <span className={`overflow-hidden transition-all ${showMenu ? 'ml-3 w-52' : 'w-0'}`}>
        {title}
      </span>
    </li>
  );
}
