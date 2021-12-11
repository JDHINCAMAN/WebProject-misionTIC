import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="flex flex-row flex-wrap flex-grow mt-2">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white border-transparent rounded-lg shadow-xl">
              <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">
                  Prueba usuarios
                </h5>
              </div>
              <div className="p-5">
                <table className="w-full p-5 text-gray-700">
                  <thead>
                    <tr>
                      <th className="text-left text-blue-900">Nombre</th>
                      <th className="text-left text-blue-900">Id</th>
                      <th className="text-left text-blue-900">Rol</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Juan</td>
                      <td>134687</td>
                      <td>Administrador</td>
                    </tr>
                    <tr>
                      <td>Alejandra</td>
                      <td>654654</td>
                      <td>Estudiante</td>
                    </tr>
                    <tr>
                      <td>Robin</td>
                      <td>987354</td>
                      <td>Estudiante</td>
                    </tr>
                    <tr>
                      <td>Cristiam</td>
                      <td>5857</td>
                      <td>Estudiante</td>
                    </tr>
                    <tr>
                      <td>Cristian</td>
                      <td>5465464</td>
                      <td>Estudiante</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
