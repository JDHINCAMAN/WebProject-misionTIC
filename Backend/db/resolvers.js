const Usuario = require("../models/Usuario");
const Proyecto = require("../models/Proyecto");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Inscripcion = require("../models/Inscripcion");
require("dotenv").config({ path: "variables.env" });

const crearToken = (usuario, secret, expiresIn) => {
  // console.log(usuario);
  const { id, email, nombre, apellido } = usuario;
  return jwt.sign({ id, email, nombre, apellido }, secret, { expiresIn });
};

// resolvers
const resolvers = {
  Query: {
    obtenerUsuario: async (_, { token }) => {
      const usuarioId = await jwt.verify(token, process.env.JWT_SECRET);
      return usuarioId;
    },
  },

  Query: {
    obtenerProyecto: async (_, { nombreProyecto }) => {
      return Proyecto.find(
        (proyect) => proyect.nombreProyecto == nombreProyecto
      );
    },
  },

  Query: {
    obtenerInscripcion: async (_, { id }) => {
      const insProyect = await Inscripcion.findById(id);
      return insProyect;
    },
  },

  Mutation: {
    crearInscripcion: async (_, { input }) => {
      try {
        const newInscription = new Inscripcion(input);
        newInscription.save();
        return newInscription;
      } catch (e) {
        console.log(e);
      }
    },

    CrearProyecto: async (_, { input }) => {
      try {
        // Guardarlo en la base de datos
        const proyect = new Proyecto(input);
        proyect.save(); // guardarlo
        return proyect;
      } catch (error) {
        console.log(error);
      }
    },

    crearUsuario: async (_, { input }) => {
      const { email, password, identificacion } = input;

      // Revisar si el usuario ya esta registrado
      const existeUsuario = await Usuario.findOne({ email });
      const existeUsuarioIdentificacion = await Usuario.findOne({
        identificacion,
      });
      if (existeUsuario || existeUsuarioIdentificacion) {
        throw new Error("El usuario ya esta registrado");
      }

      // Hashear su password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        // Guardarlo en la base de datos
        const usuario = new Usuario(input);
        usuario.save(); // guardarlo
        return usuario;
      } catch (error) {
        console.log(error);
      }
    },

    autenticarUsuario: async (_, { input }) => {
      const { email, password } = input;
      // Revisar si el usuario existe
      const existeUsuario = await Usuario.findOne({ email });
      if (!existeUsuario) {
        throw new Error("El usuario no existe");
      }

      // Revisar si el password es correcto
      const passwordCorrecto = await bcryptjs.compare(
        password,
        existeUsuario.password
      );
      if (!passwordCorrecto) {
        throw new Error("El password es incorrecto");
      }

      // Crear y firmar el JWT
      return {
        token: crearToken(existeUsuario, process.env.JWT_SECRET, "24h"),
      };
    },
  },
};

module.exports = resolvers;
