const Usuario = require("../models/Usuario");
const Proyecto = require("../models/Proyecto");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Inscripcion = require("../models/Inscripcion");
require("dotenv").config({ path: "variables.env" });

const crearToken = (usuario, secret, expiresIn) => {
  // console.log(usuario);
  const { id, email, nombre, apellido, rol, identificacion, estado } = usuario;
  return jwt.sign(
    { id, email, nombre, apellido, rol, identificacion, estado },
    secret,
    { expiresIn }
  );
};

// resolvers
const resolvers = {
  Query: {
    obtenerUsuario: async (_, { token }, ctx) => {
      const usuarioId = await jwt.verify(token, process.env.JWT_SECRET);
      return usuarioId;
    },
    obtenerUsuarios: async (_, {}, ctx) => {
      // validar que el usuario logeado sea administrador
      if (ctx.usuario.rol !== "ADMINISTRADOR") {
        throw new Error("No estas autorizado");
      }
      // obtener los usuarios
      const usuarios = await Usuario.find({});
      return usuarios;
    },

    obtenerProyecto: async (_, { nombreProyecto }) => {
      return Proyecto.find(
        (proyect) => proyect.nombreProyecto == nombreProyecto
      );
    },
    obtenerProyectos: async (_, {}, ctx) => {
      // validar que el usuario logeado sea administrador
      if (ctx.usuario.rol !== "ADMINISTRADOR") {
        throw new Error("No estas autorizado");
      }
      // obtener los proyectos
      const proyectos = await Proyecto.find({});
      return proyectos;
    },

    obternerProyectosPorLider: async (_, {}, ctx) => {
      // obtener los proyectos del usuario logeado
      const proyectos = await Proyecto.find({
        lider: ctx.usuario.id,
      });
      return proyectos;
    },
    // Inscripciones
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
      const { lider } = input;
      // revisar que el lider exista
      const liderExiste = await Usuario.findById(lider);
      if (!liderExiste) {
        throw new Error("El lider no esta reistrado");
      }

      // revisar que el usuario tenga el rol de lider
      if (liderExiste.rol !== "LIDER") {
        throw new Error("El usuario no es lider");
      }

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

    actualizarUsuario: async (_, { id, input }, ctx) => {
      const { password } = input;

      // verificar si el usuario existe
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        throw new Error("No existe el usuario");
      }
      // verificar si el usuario logeado es el mismo usuario
      if (usuario.id !== ctx.usuario.id) {
        throw new Error("No estas autorizado");
      }
      // Hashear su password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      // actualizar el usuario
      const nuevoUsuario = await Usuario.findByIdAndUpdate(id, input, {
        new: true,
      });
      return nuevoUsuario;
    },

    actualizarUsuarioEstado: async (_, { id, estado }, ctx) => {
      // verificar si el usuario existe
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        throw new Error("No existe el usuario");
      }
      // verificar si el usuario logeado es administrador
      if (ctx.usuario.rol !== "ADMINISTRADOR") {
        throw new Error("No estas autorizado");
      }
      // actualizar el estado
      const nuevoUsuario = await Usuario.findByIdAndUpdate(
        id,
        { estado },
        {
          new: true,
        }
      );
      return nuevoUsuario;
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

    actualizarProyectoEstado: async (_, { id, input }, ctx) => {
      // validar que el usuario logeado sea administrador
      if (ctx.usuario.rol !== "ADMINISTRADOR") {
        throw new Error("No estas autorizado");
      }
      // validar que el proyecto exista
      const proyecto = await Proyecto.findById(id);
      if (!proyecto) {
        throw new Error("El proyecto no existe");
      }
      // actualizar el estado
      const nuevoProyecto = await Proyecto.findByIdAndUpdate(id, input, {
        new: true,
      });
      return nuevoProyecto;
    },
  },
};

module.exports = resolvers;
