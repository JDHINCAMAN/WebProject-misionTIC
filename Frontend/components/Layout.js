import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  // hook de router
  const router = useRouter();

  return (
    <>
      {/* <Head>
        <title>WP - Administrador de Proyectos</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
          rel="icon"
          href="/media/logo_small_icon_only.png"
        />
      </Head>
      {router.pathname === "/login" || router.pathname === "/registro" ? (
        <div className="min-h-screen flex flex-col justify-center">
          <div className="">{children}</div>
        </div>
      ) : (
        <div className="bg-gray-200 min-h-screen">
          <div className="flex xl:flex-row sm:flex-col min-h-screen">
            <Sidebar />
            <main className="sm:w-2/3 xl:w-4/5 sm:min-h-sreen p-5">
              {children}
            </main>
          </div>
        </div>
      )} */}
      <Head>
        <title>WP - Administrador de Proyectos</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerPolicy="no-referrer"
          rel="icon"
          href="/media/logo_small_icon_only.png"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          href="https://afeld.github.io/emoji-css/emoji.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        ></script>
      </Head>
      <div className="bg-gray-700 font-sans leading-normal tracking-normal mt-12">
        <nav className="bg-gray-700 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
          <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
              <a href="/">
                <img
                  src="/media/logo_small_icon_only.png"
                  alt="Logo"
                  className="mx-auto max-h-14 w-auto"
                />
              </a>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <input
                  type="search"
                  placeholder="Buscar"
                  className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
                />
                <div className="absolute search-icon top-4 left-4">
                  <svg
                    className="fill-current pointer-events-none text-white w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="flex-1 md:flex-none md:mr-3">
                  <a
                    className="inline-block py-2 px-4 text-white no-underline"
                    href="#"
                  >
                    Activo
                  </a>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                  <span className="pr-2">
                    <a href="/login" className="p-2 text-white">
                      Iniciar sesión
                    </a>
                    <i className="em em-robot_face"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-700 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
              <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li className="mr-3 flex-1">
                  <a
                    href="/"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-400"
                  >
                    <i className="fas fa-tasks pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">
                      Proyectos
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="/"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-400"
                  >
                    <i className="fa fa-users pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-gray-400 block md:inline-block">
                      Usuarios
                    </span>
                  </a>
                </li>
                <li className="mr-3 flex-1">
                  <a
                    href="/"
                    className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-yellow-400"
                  >
                    <i className="fas fa-chart-area pr-0 md:pr-3"></i>
                    <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                      Inscripciones
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
            <div className="bg-gray-700 pt-3">
              <div className="rounded-tl-3xl bg-gradient-to-r from-blue-500 to-gray-900 p-4 shadow text-2xl text-white">
                <h3 className="font-bold pl-2">Panel de control</h3>
              </div>
            </div>

            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
