import React from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <>
      <Layout>
        {/* <h1 className="text-center text-2xl text-white font-light">Login</h1>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-300 focus:border-transparent"
                  id="email"
                  type="email"
                  placeholder="Email Usuario"
                ></input>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:border-blue-300 focus:border-transparent"
                  id="password"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
              <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="Iniciar Sesion"
              >
              
              </input>
            </form>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          {/* <Head>
            <title>WebProject</title>
            <link rel="icon" href="/media/logo_small_icon_only.png" />
          </Head> */}

          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div>
              <a href="/">
                <img
                  src="/media/logo_large.png"
                  alt="Logo Google"
                  className="mx-auto h-40 w-auto"
                />
              </a>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Inicia sesión en tu cuenta
              </h2>
              <form className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                      placeholder="Correo Electrónico"
                    />
                  </div>
                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-iyellow-400 focus:ring-yellow-400 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Recuérdame
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="/"
                      className="font-medium text-gray-700 hover:text-gray-900"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                  >
                    <a href="/admin">Inicia sesión</a>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span>¿No tienes cuenta?</span>
                  <a href="/registro">
                    <span className="font-medium text-gray-700 hover:text-gray-900">
                      Regístrate
                    </span>
                  </a>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center">
              <span className="mx-4">------------------------</span>
              <h2 className="my-4 text-center text-sm font-extrabold text-gray-900">
                O
              </h2>
              <span className="mx-4">------------------------</span>
            </div>
            <div className="max-w-md w-full">
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <div className="flex items-center justify-start">
                    <img
                      src="/media/google_logo.png"
                      alt="Logo Google"
                      className="h-6 w-6"
                    />
                    <span className="mx-4">Continúa con Google</span>
                  </div>
                </button>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Login;
