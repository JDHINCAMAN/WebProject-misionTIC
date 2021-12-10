import Head from "next/head";

export default function Registro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>WebProject</title>
        <link rel="icon" href="/media/logo_small_icon_only.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <a href="/">
          <img
            src="/media/logo_large.png"
            alt="Logo Google"
            className="mx-auto h-40 w-auto"
          />
        </a>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Crea tu cuenta
        </h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm grid grid-cols-2 gap-2">
            <label htmlFor="nombre">
              Nombre
              <input
                name="nombre"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ej. Juan David"
              />
            </label>
            <label htmlFor="apellido">
              Apellido
              <input
                name="apellido"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ej. Hincapie Manrique"
              />
            </label>
            <label htmlFor="nacimiento">
              Fecha de Nacimiento
              <input
                name="nacimiento"
                type="date"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              />
            </label>
            <label htmlFor="correo">
              Correo electrónico
              <input
                name="correo"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ejemplo@gmail.com"
              />
            </label>
            <label htmlFor="nacimiento">
              Contraseña
              <input
                name="contraseña"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              />
            </label>
            <label htmlFor="identificacion">
              Identificación
              <input
                name="identificacion"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                placeholder="ej. 10123456"
              />
            </label>
            <label htmlFor="rol">
              Rol
              <select
                name="rol"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
              >
                <option selected disabled>
                  ...
                </option>
                <option>Administrador</option>
                <option>Lider</option>
                <option>Estudiante</option>
              </select>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              <a href="/">Regístrate</a>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span>¿Ya tienes cuenta?</span>
            <a href="/">
              <span className="font-medium text-gray-900 hover:text-black">
                Inicia Sesión
              </span>
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
