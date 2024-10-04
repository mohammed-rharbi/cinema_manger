import React from 'react';
import NavBar from './navbar';
import Footer from './fotter';
import SideBar from './sideBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
   
   

      <div className="flex min-h-screen">

        <SideBar className="w-64 bg-gray-800 text-white" />

        <main className="flex-1 p-6 bg-gray-900">
          <Outlet />
        </main>
      </div>


    </>
  );
}
