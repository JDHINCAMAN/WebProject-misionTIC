import React from "react";
import { gql, useQuery } from "@apollo/client";

const OBTENER_INSCRIPCIONES = gql`
  query ObtenerInscripcionesLider {
    obtenerInscripcionesLider {
      id
      proyecto {
        id
        nombreProyecto
        estadoProyecto
        faseProyecto
      }
      estudiante {
        id
        nombre
        apellido
        identificacion
        email
        rol
        estado
      }
      estado
      fechaIngreso
      fechaEgreso
    }
  }
`;

const InscripcionesRechazadas = () => {
  // state pra el mensaje
  // consulta de apollo
  const { data, loading, error } = useQuery(OBTENER_INSCRIPCIONES);
  console.log(data);
  console.log(loading);
  console.log(error);

  if (loading) return "Cargando...";

  return (
    <div class="bg-white p-8 rounded-md w-full">
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 hover:bg-yellow-500 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estudiante
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 hover:bg-yellow-500 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Proyecto
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 hover:bg-yellow-500 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Fecha Ingreso
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 hover:bg-yellow-500 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 hover:bg-yellow-500 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.obtenerInscripcionesLider.map((inscripcion) => (
                  <>
                    <tr key={inscripcion.id} class="hover:bg-gray-500">
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://cdn5.vectorstock.com/i/thumb-large/82/59/anonymous-user-flat-icon-vector-18958259.jpg"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {inscripcion.estudiante.nombre}{" "}
                              {inscripcion.estudiante.nombre}
                            </p>
                            <div class="text-sm text-gray-500">
                              {inscripcion.estudiante.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {inscripcion.proyecto.nombreProyecto}
                            </p>
                            <div class="text-sm text-gray-500">
                              {inscripcion.proyecto.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {inscripcion.fechaIngreso}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {inscripcion.estado === false ? "Inactivo" : "Activo"}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Gestionar
                        </a>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <div class="inline-flex mt-2 xs:mt-0">
                <button class="group relative w-full flex justify-center ml-2  py-2 px-6 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                  Anterior
                </button>
                &nbsp; &nbsp;
                <button class="group relative w-full flex justify-center ml-2  py-2 px-6 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscripcionesRechazadas;
