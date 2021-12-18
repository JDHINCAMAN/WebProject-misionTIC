import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import MostrarProyecto from "./MostrarProyecto";
import FormCrearProyectos from "./FormCrearProyectos";
import { toast } from "react-toastify";
import StepperProgress from "./StepperProgress";
import NavProyectos from "./NavProyectos";

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

const ACTUALIZAR_ESTADO_PROYECTO = gql`
  mutation ActualizarProyectoEstado(
    $actualizarProyectoEstadoId: ID!
    $input: ActualizarProyectoInput!
  ) {
    actualizarProyectoEstado(id: $actualizarProyectoEstadoId, input: $input) {
      id
      nombreProyecto
      objetivoGeneral
      objetivosEspecificos
      presupuesto
      estadoProyecto
      lider
    }
  }
`;

const Proyectos = ({ usuario }) => {
  const [modal, setModal] = React.useState(false);
  const [showModal, setShow] = React.useState(false);
  const [proyecto, setProyecto] = useState([]);

  const { data, loading, error } = useQuery(OBTENER_PROYECTOS, {
    fetchPolicy: "network-only",
  });

  const [actualizarProyectoEstado] = useMutation(ACTUALIZAR_ESTADO_PROYECTO);

  const handleActualizarEstado = async (e) => {
    e.preventDefault();
    console.log(typeof e.target.value);
    const input = {
      estadoProyecto: e.target.value === "true" ? false : true,
      faseProyecto: e.target.value === "true" ? "TERMINADO" : "INICIADO",
    };
    try {
      await actualizarProyectoEstado({
        variables: {
          actualizarProyectoEstadoId: e.target.id,
          input,
        },
      });
      toast.success("Estado actualizado correctamente");
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const functionClick = (e) => {
    setShow(true);
    const proyect = data.obtenerProyectos.filter(
      (proyect) => proyect.id === e.target.id
    );
    setProyecto(proyect);
  };

  if (loading) return "Cargando...";
  data.obtenerProyectos.map((proyect) => console.log(proyect));

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

      <NavProyectos></NavProyectos>

      {modal && <FormCrearProyectos handleClose={() => setModal(false)} />}
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 py-5">
        {data.obtenerProyectos.map((proyect) => (
          <div
            className={`flex flex-col gap-x-5 bg-gray-300 mx-3 my-3 hover:bg-gray-100 w-4/5 h-auto items-center px-5 rounded-xl border-l-8 ${
              proyect.estadoProyecto ? "border-l-green-600" : "border-l-red-600"
            } relative`}
          >
            <button className="flex absolute z-10 right-2.5 top-2.5 ">
              <svg
                class="ml-8 h-6 w-6 text-gray-500 hover:text-gray-700"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
            </button>

            <div className="flex items-center mt-3">
              <h1 className="">{proyect.nombreProyecto}</h1>
            </div>

            <div className="px-1 pt-2">
              <hr className="border border-gray-400 w-40" />
            </div>
            <h2>{proyect.objetivoGeneral}</h2>

            <div className="flex w-full my-3">
              <p>
                Estado Actual:{" "}
                <span
                  className={`px-3 py-1 inline-flex text- leading-5 font-semibold rounded-full  ${
                    proyect.estadoProyecto ? "bg-green-600" : "bg-red-600"
                  } text-white`}
                >
                  {proyect.estadoProyecto ? "Activo" : "Inactivo"}
                </span>
              </p>
            </div>

            <div className="flex my-8 justify-around w-full">
              {usuario.rol === "ADMINISTRADOR" && (
                <button
                  id={proyect.id}
                  type="button"
                  value={proyect.estadoProyecto}
                  // className="bg-black w-20 h-9 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900"
                  className={`${
                    proyect.estadoProyecto ? "bg-red-600" : "bg-green-600"
                  } w-20 h-9 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900`}
                  onClick={handleActualizarEstado}
                >
                  {proyect.estadoProyecto ? "Desactivar" : "Activar"}
                </button>
              )}

              <button
                id={proyect.id}
                type="submit"
                className="bg-black text-sm py-2 w-full shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900"
                onClick={(e) => functionClick(e)}
              >
                Detalles
              </button>
            </div>
            <div className="my-3 flex w-full justify-center">
              <StepperProgress faseProyecto={proyect.faseProyecto} />
            </div>
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
