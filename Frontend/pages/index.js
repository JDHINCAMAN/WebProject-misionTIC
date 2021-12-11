import Head from "next/head";
import Layout from "../components/Layout";
import Usuarios from "../components/Usuarios";
import { useState, useEffect } from "react";

export default function Home() {

  // validar la seccion de usuarios
  const [seccion, setSeccion] = useState("usuarios");

  return (
    <div>
      <Layout>
        <h1 className="text-3xl text-grey-800 font-light">{seccion.toUpperCase()}</h1>
        <main className="p-8">
          {seccion === "usuarios" && <Usuarios />}
        </main>
      </Layout>
    </div>
  );
}
