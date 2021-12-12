import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, gql } from "@apollo/client";
import { toast } from "react-toastify";
import FormCrearProyectos from "./FormCrearProyectos";

const Proyectos = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <button
        type="submit"
        className="group relative w-500 flex justify-center mr-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
        onClick={() => setModal(true)}
      >
        crear proyecto
      </button>
      {modal && <FormCrearProyectos handleClose={() => setModal(false)} />}
    </>
  );
};

export default Proyectos;
