import React, { useState } from "react";

const FormCrearProyectos = () => {
  // estate para mostrar modal
  const [show, setShow] = useState(false);
  return (
    <>
      {show && (
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
                <form className="p-3  mt-2 text-center space-x-4 md:block">
                  <button
                    name="si"
                    id="si"
                    type="submit"
                    className="mb-2 md:mb-0 bg-yellow-300 border border-yellow-300 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-black rounded-full hover:shadow-lg hover:bg-yellow-400"
                  >
                    Si
                  </button>
                  <button className="mb-2 md:mb-0 bg-black px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-gray-900">
                    Cancelar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormCrearProyectos;
