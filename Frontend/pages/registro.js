import Head from "next/head";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";

const NUEVA_CUENTA = gql`
  mutation CrearUsuario($input: UsuarioInput) {
    crearUsuario(input: $input) {
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

export default function Registro() {
  const [crearUsuario] = useMutation(NUEVA_CUENTA);

  // validacion del formulario
  const formik = useFormik({
    initialValues: {
    identificacion: '',
    rol: '',
    nombre: '',
    apellido: '',
    email: '',
    password: ''
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatoria"),
      identificacion: Yup.string().required("La identificacion es obligatoria"),
      rol: Yup.string().required("El rol es obligatorio")
    }),
    onSubmit: async (valores) => {
      const { nombre, apellido, email, password, identificacion, rol } = valores;

      console.log(typeof identificacion)

      try {
        const { data } = await crearUsuario({
          variables: {
            input: {
              identificacion: identificacion.toString(),
              rol,
              nombre,
              apellido,
              email,
              password
            }
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  console.log(formik.errors);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>WebProject</title>
        <link rel="icon" href="/media/logo_small_icon_only.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <a href="/">
          <img
            src="/media/logo_large.png"
            alt="Logo Google"
            className="mx-auto h-40 w-auto"
          />
        </a>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Crea tu cuenta
        </h2>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm grid grid-cols-2 gap-2">
            <label htmlFor="nombre">
              Nombre
              <input
                name="nombre"
                id="nombre"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ej. Juan David"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label htmlFor="apellido">
              Apellido
              <input
                name="apellido"
                id="apellido"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ej. Hincapie Manrique"
                value={formik.values.apellido}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            {/* <label htmlFor="nacimiento">
              Fecha de Nacimiento
              <input
                name="nacimiento"
                type="date"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              />
            </label> */}
            <label htmlFor="email">
              Correo electrónico
              <input
                name="email"
                id="email"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ejemplo@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label htmlFor="password">
              Contraseña
              <input
                name="password"
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              />
            </label>
            <label htmlFor="identificacion">
              Identificación
              <input
                name="identificacion"
                id="identificacion"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ej. 10123456"
                value={formik.values.identificacion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label htmlFor="rol">
              Rol
              <select
                name="rol"
                id="rol"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                value={formik.values.rol}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value=''>
                  ...
                </option>
                <option value="ADMINISTRADOR">Administrador</option>
                <option value='LIDER'>Lider</option>
                <option value="ESTUDIANTE">Estudiante</option>
              </select>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Regístrate
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span>¿Ya tienes cuenta?</span>
            <a href="/">
              <span className="font-medium text-gray-900 hover:text-black">
                Inicia Sesión
              </span>
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
