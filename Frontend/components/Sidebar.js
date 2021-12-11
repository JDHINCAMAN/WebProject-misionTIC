import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router'

const Sidebar = () => {

    // routing de nextjs
    const router = useRouter()
    console.log(router.pathname)
  return (
    <aside className="w-64 bg-gray-500 rounded-md">
      <div>
        <p className="text-white text-2xl font-black"> WP - Menu</p>
      </div>

      <nav className="mt-5 list-none h-48">
        <li className={router.pathname==="/" ? "bg-blue-300 p-3": "p-3"}>
          <Link href="/">
            <a className="text-black mb-3 block">Proyectos</a>
          </Link>
        </li>
        <li className={router.pathname==="/inscripciones" ? "bg-blue-300 p-3": "p-3"}>
          <Link href="/inscripciones">
            <a className="text-black mb-3 block">Inscripciones</a>
          </Link>
        </li>
        <li className={router.pathname==="/usuarios" ? "bg-blue-300 p-3": "p-3"}>
          <Link href="/usuarios">
            <a className="text-black mb-3 block">Usuarios</a>
          </Link>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
