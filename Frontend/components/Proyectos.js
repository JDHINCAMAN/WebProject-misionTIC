import React from "react";
import { gql, useQuery } from "@apollo/client";
import MostrarProyecto from "./MostrarProyecto";
import FormCrearProyectos from "./FormCrearProyectos";

const OBTENER_PROYECTOS = gql`
  query ObtenerProyectos {
    obtenerProyectos {
      id
      nombreProyecto
      objetivoGeneral
    }
  }
`;

const Proyectos = () => {
  const [modal, setModal] = React.useState(false);
  const [showModal, setShow] = React.useState(false);

  const { data, loading, error } = useQuery(OBTENER_PROYECTOS);

  if (loading) return "Cargando...";

  return (
    <>
      <h1 className="text-3xl text-grey-800 font-light">
        TABLERO DE PROYECTOS
      </h1>
      {error && (
        <div>
          <p className="text-red-800 font-bold">{error.message}</p>
        </div>
      )}
      {!error && (
        <>
          <button
            type="submit"
            className="flex self-end py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            onClick={() => setModal(true)}
          >
            crear proyecto
          </button>
          {modal && <FormCrearProyectos handleClose={() => setModal(false)} />}

          <div className="grid grid-cols-4 py-5">
            {data.obtenerProyectos.map((person) => (
              <div className="flex flex-col gap-x-5 bg-gray-300 mx-3 my-3 hover:bg-gray-100 w-56 h-auto items-center px-5 rounded-xl">
                <h1 className="mt-3">{person.nombreProyecto}</h1>
                <div className="px-1 pt-2">
                  <hr className="border border-gray-400 w-48" />
                </div>
                <h2>{person.objetivoGeneral}</h2>
                <button
                  type="submit"
                  className="bg-black my-3 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900"
                  onClick={() => setShow(true)}
                >
                  Más Información
                </button>
                {showModal && (
                  <MostrarProyecto handleClose={() => setShow(false)} />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Proyectos;
