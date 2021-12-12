import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import { toast } from "react-toastify";

const NUEVO_PROYECTO = gql`
  mutation CrearProyecto($input: ProyectoInput) {
    crearProyecto(input: $input) {
      id
      nombreProyecto
      objetivoGeneral
      objetivosEspecificos
      presupuesto
    }
  }
`;

toast.configure();


const Proyectos = () => {

  // state pra el mensaje
  const [crearProyecto] = useMutation(NUEVO_PROYECTO);

  // Routin
  const router = useRouter();

  // validacion del formulario
  const formik = useFormik({
    initialValues: {
      nombreProyecto: "",
      objetivoGeneral: "",
      objetivosEspecificos: "",
      presupuesto: ""
    },
    validationSchema: Yup.object({
      nombreProyecto: Yup.string().required("El nombre es obligatorio"),
      objetivoGeneral: Yup.string().required("El objetivo es obligatorio"),
      objetivosEspecificos: Yup.string()
        .required("Los objetivos especificos son obligatorios"),
      presupuesto: Yup.string().required("El presupuesto es obligatoria"),
    }),
    onSubmit: async (valores) => {
      const { nombreProyecto, objetivoGeneral, objetivosEspecificos, presupuesto} =
        valores;

      try {
        const { data } = await crearProyecto({
          variables: {
            input: {
              nombreProyecto,
              objetivoGeneral,
              objetivosEspecificos,
              presupuesto,
            },
          },
        });
        console.log(data);
        toast.success("Proyecto Creado Correctamente", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } catch (error) {
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
    },
  });

  console.log(formik.errors);
  return (
    <div className="flex items-center justify-center bg-gray-200">
      <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
        <label htmlFor="nombreProyecto">
          Nombre de Proyecto
          <input
            name="nombreProyecto"
            id="nombreProyecto"
            type="text"
            // className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 ${
              formik.errors.nombreProyecto ? "border-red-500" : ""
            } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm`}
            value={formik.values.nombreProyecto}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>
            {formik.errors.nombreProyecto ? (
              <div className="text-red-500 text-xs italic">
                {formik.errors.nombreProyecto}
              </div>
            ) : null}
          </span>
        </label>
        <label htmlFor="objetivoGeneral">
          Objetivo General
          <input
            name="objetivoGeneral"
            id="objetivoGeneral"
            type="text"
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 ${
              formik.errors.objetivoGeneral ? "border-red-500" : ""
            } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm`}
            value={formik.values.objetivoGeneral}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>
            {formik.touched.objetivoGeneral && formik.errors.apellido ? (
              <div className="text-red-500 text-xs italic">
                {formik.errors.objetivoGeneral}
              </div>
            ) : null}
          </span>
        </label>
        <label htmlFor="objetivosEspecificos">
          Objetivos Especificos
          <input
            name="objetivosEspecificos"
            id="objetivosEspecificos"
            type="text"
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 ${
              formik.errors.objetivosEspecificos ? "border-red-500" : ""
            } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm`}
            value={formik.values.objetivosEspecificos}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span>
            {formik.touched.objetivosEspecificos && formik.errors.email ? (
              <div className="text-red-500 text-xs italic">
                {formik.errors.objetivosEspecificos}
              </div>
            ) : null}
          </span>
        </label>
        <label htmlFor="presupuesto">
          Presupuesto
          <input
            name="presupuesto"
            id="presupuesto"
            type="number"
            value={formik.values.presupuesto}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 ${
              formik.errors.presupuesto ? "border-red-500" : ""
            } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm`}
          />
          <span>
            {formik.touched.presupuesto && formik.errors.password ? (
              <div className="text-red-500 text-xs italic">
                {formik.errors.presupuesto}
              </div>
            ) : null}
          </span>
        </label>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="group relative w-full flex justify-center mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Guardar
          </button>

          <button
            type=""
            className="group relative w-full flex justify-center ml-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Proyectos;

