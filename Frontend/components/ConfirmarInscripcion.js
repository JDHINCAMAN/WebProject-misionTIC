import React from "react";
import { useRouter } from "next/router";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import { useMutation, gql, useQuery } from "@apollo/client";
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

const OBTENER_USUARIO = gql`
  query ObtenerUsuario {
    obtenerUsuario {
      id
      nombre
      apellido
      email
      rol
    }
  }
`;

const OBTENER_PROYECTO = gql`
  query ObtenerProyecto {
    obtenerProyecto {
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

toast.configure();

const ConfirmarInscripcion = ({ handleClose }) => {
  const [crearInscripcion] = useMutation(NUEVA_INSCRIPCION);
  const [modal, setModal] = React.useState(false);

  const { data } = useQuery(OBTENER_PROYECTO);

  const { dataU } = useQuery(OBTENER_USUARIO);

  console.log(data);
  console.log(dataU);

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
        const { data } = await crearInscripcion({
          variables: {
            input: {
              proyecto: obtenerProyecto,
              estudiante: obtenerUsuario.id,
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
    <>
      <div>
        <div
          className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div className="">
              <div className="text-center p-5 flex-auto justify-center">
                <h2 className="text-xl font-bold py-4 ">
                  ¿Inscribirse a este Proyecto?
                </h2>
              </div>
              <form
                className="p-3  mt-2 text-center space-x-4 md:block"
                onSubmit={formik.handleSubmit}
              >
                <button
                  type="submit"
                  className="mb-2 md:mb-0 bg-yellow-300 border border-yellow-300 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-black rounded-full hover:shadow-lg hover:bg-yellow-400"
                  value={formik.values.si}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  Si
                </button>
                <button
                  type="button"
                  className="mb-2 md:mb-0 bg-black px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
                {modal && (
                  <ConfirmarInscripcion handleClose={() => setModal(false)} />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ConfirmarInscripcion;
