import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import { toast } from "react-toastify";

const NUEVA_INSCRIPCION = gql`
  mutation crearInscripcion($input: InscripcionInput) {
    crearInscripcion(input: $input) {
      id
      proyecto
      estudiante
      estado
      fechaIngreso
      fechaEgreso
    }
  }
`;

toast.configure();

const Inscripciones = () => {
  // state pra el mensaje
  const [crearInscripcion] = useMutation(NUEVA_INSCRIPCION);

  // Routin
  const router = useRouter();

  // validacion del formulario
  const formik = useFormik({
    initialValues: {
      proyecto: "",
      estudiante: "",
    },
    validationSchema: Yup.object({
      proyecto: Yup.string().required("El Proyecto es obligatorio"),
      estudiante: Yup.string().required("Usted debe ser un estudiante"),
    }),
    onSubmit: async (valores) => {
      const { proyecto, estudiante } = valores;

      try {
        const { data } = await crearUsuario({
          variables: {
            input: {
              proyecto,
              estudiante,
            },
          },
        });
        console.log(data);
        toast.success("Inscripción realizada exitosamente", {
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
  return (
    <div class="font-sans">
      <div class="relative flex flex-col p-28 sm:justify-center items-center">
        <div class="relative sm:max-w-sm w-full">
          <div class="card bg-yellow-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div class="card bg-black shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              for=""
              class="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Inscribete
            </label>
            <form method="#" action="#" class="mt-10">
              <label htmlFor="rol">
                Selecciona un Proyecto
                <select
                  name="proyecto"
                  id="proyecto"
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 ${
                    formik.errors.rol ? "border-red-500" : ""
                  } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm`}
                  value={formik.values.proyecto}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">...</option>
                  <option value="1">Proyecto 1</option>
                  <option value="2">Proyecto 2</option>
                  <option value="3">Proyecto 3</option>
                </select>
                <span>
                  {formik.touched.proyecto && formik.errors.proyecto ? (
                    <div className="text-red-500 text-xs italic">
                      {formik.errors.proyecto}
                    </div>
                  ) : null}
                </span>
              </label>
              <div class="mt-7">
                <button class="bg-yellow-400 w-full py-3 rounded-xl text-black shadow-xl font-medium hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Hacer Inscripción
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscripciones;
