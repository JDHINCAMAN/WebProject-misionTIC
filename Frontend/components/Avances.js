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

const OBTENER_AVANCES = gql`
  query obtenerAvancesProyecto($proyecto: ID!) {
    obtenerAvancesProyecto(proyecto: $proyecto) {
      id
      nombreProyecto
    }
  }
`;

const Avances = () => {
  // consulta de apollo
  const { data, loading, error } = useQuery(OBTENER_PROYECTOS);
  console.log(data);
  console.log(loading);
  console.log(error);

  const { datos, load, bug } = useQuery(OBTENER_AVANCES, { variables: {proyecto: "61b69bdbfe818f4841990742"}});
  console.log(datos);
  console.log(load);
  console.log(bug);

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const functionClick = (e) => {
    
    const proyect = data.obtenerProyectos.filter(
      (proyect) => proyect.id === e.target.id
    );
    document.getElementById("btn-proyecto").innerHTML =
      proyect[0].nombreProyecto;

    console.log(e.target.id)

    dropdownPopoverShow
      ? setDropdownPopoverShow(false)
      : setDropdownPopoverShow(true);

  };

  if (loading) return "Cargando...";

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="flex py-2 px-4 mx-3 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
        >
          crear avance
        </button>
        <div>
          <div className="flex justify-center items-center">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              id="btn-proyecto"
              aria-expanded="true"
              aria-haspopup="true"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? setDropdownPopoverShow(false)
                  : setDropdownPopoverShow(true);
              }}
            >
              Seleccionar Proyecto
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? "block " : "hidden ") +
              "origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            }
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            {data.obtenerProyectos.map((proyecto) => (
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm absolute"
                  role="menuitem"
                  tabindex="-1"
                  id={proyecto.id}
                  onClick={(e) => functionClick(e)}
                >
                  {proyecto.nombreProyecto}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Avances;
