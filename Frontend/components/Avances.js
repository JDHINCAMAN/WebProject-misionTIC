import React from "react";
import { gql, useQuery } from "@apollo/client";

const OBTENER_PROYECTOS = gql`
  query ObtenerProyectos {
    obtenerProyectos {
      id
      nombreProyecto
    }
  }
`;

const Avances = () => {
  // consulta de apollo
  const { data, loading, error } = useQuery(OBTENER_PROYECTOS);
  console.log(data)
  console.log(loading)
  console.log(error)

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  if (loading) return "Cargando...";

  return (
    <>
    <div class="relative inline-block text-left">
    <button
      type="submit"
      className="flex py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
      
    >
      crear avance
    </button>
    <div>
    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"
    ref={btnDropdownRef}
    onClick={() => {
      dropdownPopoverShow
        ? setDropdownPopoverShow(false)
        : setDropdownPopoverShow(true)
    }}>
      Seleccionar Proyecto
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>


  <div ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") + "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
  {data.obtenerProyectos.map((proyecto) => (
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0" onClick={e => e.preventDefault(console.log(proyecto.nombreProyecto))}>{proyecto.nombreProyecto}</a>
    </div>
    ))}
  </div>
    </div>
  </>
  );
};

export default Avances;
