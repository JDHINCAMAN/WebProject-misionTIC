import Head from "next/head";
import Layout from "../components/Layout";
import Usuarios from "../components/Usuarios";
import Proyectos from "../components/Proyectos";
import Inscripciones from "../components/Inscripciones";
import { useState, useEffect } from "react";

export default function Home() {
  // validar la seccion de usuarios
  const [seccion, setSeccion] = useState("usuarios");

  return (
    <div>
      <Layout setSeccion={setSeccion}>
        <h1 className="text-3xl text-grey-800 font-light">
          {seccion.toUpperCase()}
        </h1>
        <main className="p-8">
          {seccion === "usuarios" && <Usuarios />}
          {seccion === "proyectos" && <Proyectos />}
          {seccion === "inscripciones" && <Inscripciones />}
        </main>
      </Layout>
    </div>
  );
}
