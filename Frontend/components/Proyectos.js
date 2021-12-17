import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import MostrarProyecto from "./MostrarProyecto";
import FormCrearProyectos from "./FormCrearProyectos";

const OBTENER_PROYECTOS = gql`
  query ObtenerProyectos {
    obtenerProyectos {
      id
      nombreProyecto
      objetivoGeneral
      objetivosEspecificos
      presupuesto
      fechaInicio
      fechaFin
      estadoProyecto
      faseProyecto
      lider
    }
  }
`;

const Proyectos = ({ usuario }) => {
  const [modal, setModal] = React.useState(false);
  const [showModal, setShow] = React.useState(false);
  const [proyecto, setProyecto] = useState([]);

  const { data, loading, error } = useQuery(OBTENER_PROYECTOS);

  const functionClick = (e) => {
    setShow(true);
    const proyect = data.obtenerProyectos.filter(
      (proyect) => proyect.id === e.target.id
    );
    setProyecto(proyect);
  };

  if (loading) return "Cargando...";
  data.obtenerProyectos.map((proyect) =>(
    console.log(proyect)
  ))

  return (
    <>
      {usuario.rol === "LIDER" && (
        <button
          type="submit"
          className="flex self-end py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          onClick={() => setModal(true)}
        >
          crear proyecto
        </button>
      )}

      {modal && <FormCrearProyectos handleClose={() => setModal(false)} />}
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 py-5">
        {data.obtenerProyectos.map((proyect) => (
          <div className={`flex flex-col gap-x-5 bg-gray-300 mx-3 my-3 hover:bg-gray-100 w-4/5 h-auto items-center px-5 rounded-xl border-l-8 ${proyect.estadoProyecto ? 'border-l-green-400':'border-l-red-400'}`}>

            <h1 className="mt-3">{proyect.nombreProyecto}</h1>
            <div className="px-1 pt-2">
              <hr className="border border-gray-400 w-40" />
            </div>
            <h2>{proyect.objetivoGeneral}</h2>
            <button
              id={proyect.id}
              type="submit"
              className="bg-black my-3 px-5 py-2 w-4/5 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900"
              onClick={(e) => functionClick(e)}
            >
              Más Información
            </button>
          </div>
        ))}
        {showModal && (
          <MostrarProyecto
            handleClose={() => setShow(false)}
            proyect={proyecto}
          />
        )}
      </div>
    </>
  );
};

export default Proyectos;
