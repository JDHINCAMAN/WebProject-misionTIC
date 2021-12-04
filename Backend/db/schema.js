const { gql } = require("apollo-server");

// schema
const typeDefs = gql`
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    identificacion: String
    email: String
    rol: String
    estado: String
    creado: String
  }

  type Proyecto {
    id: ID
    nombreProyecto: String
    objetivoGeneral: String
    objetivosEspecificos: [String]
    presupuesto: Float
    fechaInicio: String
    fechaFin: String
    estadoProyecto: Boolean
    faseProyecto: faseProyecto
    lider: ID
  }

  input ProyectoInput {
    nombreProyecto: String!
    objetivoGeneral: String!
    objetivosEspecificos: [String!]
    presupuesto: Float!
    estadoProyecto: Boolean!
    faseProyecto: faseProyecto!
    lider: ID!
  }

  input ActualizarProyectoInput {
    nombreProyecto: String
    objetivoGeneral: String
    objetivosEspecificos: [String]
    presupuesto: Float
    estadoProyecto: Boolean
    faseProyecto: faseProyecto
    lider: ID
  }

  enum faseProyecto{
    INICIADO
    EN DESARROLLO
    TERMINADO
  }

  type Token {
    token: String
  }

  input UsuarioInput {
    identificacion: String!
    rol: RolUsuario!
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  enum RolUsuario {
    ADMINISTRADOR
    LIDER
    ESTUDIANTE
  }

  enum EstadoUsuario {
    AUTORIZADO
    NO_AUTORIZADO
    PENDIENTE
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  type Query {
    #Usuarios
    obtenerUsuario(token: String!): Usuario
    obtenerUsuarios: [Usuario]

    #Proyectos
    obtenerProyecto(nombreProyecto: String!): Proyecto
    obtenerProyectos: [Proyecto]
    obternerProyectosPorLider(id: ID!): [Proyecto]
  }

  type Mutation {
    #Usuarios
    crearUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token
    actualizarUsuario(id: ID!, input: UsuarioInput): Usuario
    actualizarUsuarioEstado(id: ID!, estado: EstadoUsuario!): Usuario

    #Proyectos
    CrearProyecto(input: ProyectoInput!): Proyecto
    actualizarProyectoEstado(id: ID!, input: ActualizarProyectoInput!): Proyecto

  }
`;

module.exports = typeDefs;
