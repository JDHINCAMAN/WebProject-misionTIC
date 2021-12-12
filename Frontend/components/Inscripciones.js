import React from "react";
import { gql, useQuery } from "@apollo/client";

const OBTENER_USUARIOS = gql`
  query ObtenerUsuarios {
    obtenerUsuarios {
      id
      nombre
      apellido
      identificacion
      email
      rol
      estado
      creado
    }
  }
`;
const people = [
  {
    name: "John",
    age: 25,
    email: "john@example.com",
    role: "Administrator",
    status:"Aprobado",
  },
  {
    name: "John",
    age: 25,
    email: "john@example1.com",
    role: "Lider",
    status:"Pendiente",

  },
  {
    name: "John",
    age: 25,
    email: "john@example2.com",
    role: "Estudiante",
    status:"Rechazado",
  },
];


const Inscripciones = () => {
  // state pra el mensaje
  // consulta de apollo
  const { data, loading, error } = useQuery(OBTENER_USUARIOS);
  console.log(data)
  console.log(loading)
  console.log(error)

  if (loading) return "Cargando...";
  
  return (
   
    <div class="bg-white p-8 rounded-md w-full">
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Rol
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Fecha Ingreso
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Proyecto
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody>
                {data.obtenerUsuarios.map((person) => (
                  <><tr key={person.id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img class="w-full h-full rounded-full"
                            src="https://cdn5.vectorstock.com/i/thumb-large/82/59/anonymous-user-flat-icon-vector-18958259.jpg"
                            alt="" />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {person.nombre} {person.apellido}
                          </p>
                          <div class="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">{person.rol}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Proyecto1
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                        <span class="relative">{person.estado}</span>
                      </span>
                    </td>
                  </tr><tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img class="w-full h-full rounded-full"
                              src="https://cdn5.vectorstock.com/i/thumb-large/82/59/anonymous-user-flat-icon-vector-18958259.jpg"
                              alt="" />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {person.nombre} {person.apellido}
                            </p>
                            <div class="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{person.rol}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jan 01, 2020
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Proyecto2
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                          <span class="relative">{person.estado}</span>
                        </span>
                      </td>
                    </tr><tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img class="w-full h-full rounded-full"
                              src="https://cdn5.vectorstock.com/i/thumb-large/82/59/anonymous-user-flat-icon-vector-18958259.jpg"
                              alt="" />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {person.nombre} {person.apellido}
                            </p>
                            <div class="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{person.rol}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jan 10, 2020
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Proyecto3
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                          <span aria-hidden
                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                          <span class="relative">{person.estado}</span>
                        </span>
                      </td>
                    </tr><tr>
                      <td class="px-5 py-5 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img class="w-full h-full rounded-full"
                              src="https://cdn5.vectorstock.com/i/thumb-large/82/59/anonymous-user-flat-icon-vector-18958259.jpg"
                              alt="" />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {person.nombre} {person.apellido}
                            </p>
                            <div class="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{person.rol}</p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Proyecto1</p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                          <span aria-hidden
                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                          <span class="relative">{person.estado}</span>
                        </span>
                      </td>
                    </tr></>
                ))}
                </tbody>
              </table>
              <div
                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                                    class="group relative w-full flex justify-center ml-2  py-2 px-6 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                                    Anterior
                                </button>
                  &nbsp; &nbsp;
                  <button
                                    class="group relative w-full flex justify-center ml-2  py-2 px-6 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
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

export default Inscripciones;
