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

      <NavProyectos>
        
      </NavProyectos>

      {modal && <FormCrearProyectos handleClose={() => setModal(false)} />}
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 py-5">
        {data.obtenerProyectos.map((proyect) => (
          <div
            className={`flex flex-col gap-x-5 bg-gray-300 mx-3 my-3 hover:bg-gray-100 w-4/5 h-auto items-center px-5 rounded-xl border-l-8 ${
              proyect.estadoProyecto ? "border-l-green-400" : "border-l-red-400"
            } relative`}
          >
            <button className="flex absolute z-10 right-2.5 top-2.5 ">
              <svg
                className="ml-8 h-6 w-6 text-gray-500 hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
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
                  className={`px-2  inline-flex text- leading-5 font-semibold rounded-full  ${
                    proyect.estadoProyecto ? "bg-green-400" : "bg-red-400"
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
                    proyect.estadoProyecto ? "bg-red-400" : "bg-green-400"
                  } w-20 h-9 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900`}
                  onClick={handleActualizarEstado}
                >
                  {proyect.estadoProyecto ? "Descativar" : "Activar"}
                </button>
              )}

              <button
                id={proyect.id}
                type="submit"
                className="bg-black xl:w-2/5 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900"
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
