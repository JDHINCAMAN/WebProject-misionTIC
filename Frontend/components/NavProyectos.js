import React from "react";

const NavProyectos = ({filter, setFilter}) => {
  return (
    <div className="px-6 pt-4">
      <ul className="flex">
        <li className="text-gray-500 hover:text-white focus-within:text-white">
          <a
            href="#"
            className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
            onClick={() => setFilter("todos")}
          >
            Todos Los Proyectos
          </a>
        </li>
        <li className="text-gray-500 hover:text-white focus-within:text-white">
          <a
            href="#"
            className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-yellow-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
            onClick={() => setFilter("mis proyectos")}
          >
            Mis proyectos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavProyectos;
