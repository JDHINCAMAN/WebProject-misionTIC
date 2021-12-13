import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Field, FieldArray, Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import { toast } from "react-toastify";
import FriendList from "./FriendList";
import { array } from "yup/lib/locale";

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
const FormCrearProyectos = ({ handleClose }) => {
  // estate para mostrar modal
  const [show, setShow] = useState(false);

  const [crearProyecto] = useMutation(NUEVO_PROYECTO);

  // Routin
  const router = useRouter();

  // validacion del formulario
  const formik = useFormik({
    initialValues: {
      nombreProyecto: "",
      objetivoGeneral: "",
      objetivosEspecificos: [],
      presupuesto: "",
    },
    validationSchema: Yup.object({
      nombreProyecto: Yup.string().required("El nombre es obligatorio"),
      objetivoGeneral: Yup.string().required("El objetivo es obligatorio"),
      //   objetivosEspecificos: Yup.array()
      //     .required("agregue objetivos especificos")
      //     .min(1, "agregue al menos un especifico"),
      presupuesto: Yup.string().required("El presupuesto es obligatoria"),
    }),
    onSubmit: async (valores) => {
      const {
        nombreProyecto,
        objetivoGeneral,
        objetivosEspecificos,
        presupuesto,
      } = valores;

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
  return (
    <>
      <div
        className=" min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div className="flex flex-col justify-center">
            <div className="text-center p-5 flex-auto justify-center">
              <h2 className="text-xl font-bold py-4 ">
                Crear un Nuevo Proyecto
              </h2>
            </div>
            <Formik
              initialValues={{
                nombreProyecto: "",
                objetivoGeneral: "",
                objetivosEspecificos: [],
                presupuesto: "",
              }}
              // validationSchema={Yup.object({
              //   nombreProyecto: Yup.string().required(
              //     "El nombre es obligatorio"
              //   ),
              //   objetivoGeneral: Yup.string().required(
              //     "El objetivo es obligatorio"
              //   ),
              //   objetivosEspecificos: Yup.array()
              //     .required("agregue objetivos especificos")
              //     .min(1, "agregue al menos un especifico"),
              //   presupuesto: Yup.string().required(
              //     "El presupuesto es obligatoria"
              //   ),
              // })}
              onSubmit={async (values) => {
                const {
                  nombreProyecto,
                  objetivoGeneral,
                  objetivosEspecificos,
                  presupuesto,
                } = values;
                console.log(values);
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
              }}
              render={({values}) => (
                <Form>
                  <FieldArray
                    name="objetivosEspecificos"
                    render={(arrayHelpers) => (
                      console.log(arrayHelpers),
                      <div>
                        {values.objetivosEspecificos &&
                        values.objetivosEspecificos.length > 0 ? (
                          values.objetivosEspecificos.map((objetivo, index) => (
                            <div key={index}>
                              <Field name={`objetivosEspecificos.${index}`} />
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                -
                              </button>
                              <button
                                type="button"
                                onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                              >
                                +
                              </button>
                            </div>
                          ))
                        ) : (
                          <button
                            type="button"
                            onClick={() => arrayHelpers.push("")}
                          >
                            {/* show this when user has removed all friends from the list */}
                            Add a objetivo
                          </button>
                        )}
                        <div>
                          <button type="submit">Submit</button>
                        </div>
                      </div>
                    )}
                  ></FieldArray>
                </Form>
              )}
            ></Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCrearProyectos;
