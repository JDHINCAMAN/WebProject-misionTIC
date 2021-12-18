import React from "react";

const NavProyectos = () => {
  return (
    <div className="px-6 pt-4">
      <ul className="flex">
        <li className="text-gray-500 hover:text-white focus-within:text-white">
          <a
            href="#"
            className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
          >
            Todos Los Proyectos
          </a>
          <a href="#" className="ml-2 text-gray-500 hover:text-gray-900"></a>
        </li>
        <li className="text-gray-500 hover:text-white focus-within:text-white">
          <a
            href="#"
            className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
          >
            Mis proyectos
          </a>
          <a href="#" className="ml-2 text-gray-500 hover:text-gray-900"></a>
        </li>
      </ul>
    </div>
  );
};

export default NavProyectos;
