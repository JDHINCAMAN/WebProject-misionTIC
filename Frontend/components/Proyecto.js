import React from 'react';
import StepperProgress from "./StepperProgress";


const Proyecto = ({proyect, functionClick, usuario, handleActualizarEstado}) => {
    return (
        <div>
            <div
              className={`flex flex-col gap-x-5 bg-gray-300 mx-3 my-3 hover:bg-gray-100 w-4/5 h-auto items-center px-5 rounded-xl border-l-8 ${
                proyect.estadoProyecto
                  ? "border-l-green-400"
                  : "border-l-red-400"
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
                  onClick={functionClick}
                >
                  Detalles
                </button>
              </div>
              <div className="my-3 flex w-full justify-center">
                <StepperProgress faseProyecto={proyect.faseProyecto} />
              </div>
            </div>
        </div>
    );
};

export default Proyecto;