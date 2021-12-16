import Head from "next/head";
import Layout from "../components/Layout";
import Usuarios from "../components/Usuarios";
import Proyectos from "../components/Proyectos";
import Configuracion from "../components/Configuracion";
import Inscripciones from "../components/Inscripciones";
import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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

export default function Home() {
  const router = useRouter();
  const [seccion, setSeccion] = useState("");

  // validar la seccion de usuarios

  const { data, loading, error } = useQuery(OBTENER_USUARIO,{
    fetchPolicy: "no-cache",
  });

  if (loading) return "Cargando...";

  if (!data.obtenerUsuario) {
    router.push("/login");
    return <p>nada</p>;
  }

  return (
    <div>
      <Layout setSeccion={setSeccion}>
        <main className="p-8">
          {seccion === "usuarios" &&
            data.obtenerUsuario.rol !== "ESTUDIANTE" && <Usuarios />}
          {seccion === "proyectos" && <Proyectos />}
          {seccion === "inscripciones" && <Inscripciones />}
          {seccion === "configuracion" && <Configuracion />}
        </main>
      </Layout>
    </div>
  );
}
