const { gql } = require("apollo-server");

// schema
const typeDefs = gql`
  enum faseProyecto{
    Iniciado
    en desarrollo
    Terminado
  }

  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }

  type Proyecto {
    id: ID
    nombreProyecto: String
    objetivoGeneral: String
    objetivosEspecificos: [String]
    presupuesto: Int
    fechaInicio: String
    fechaFin: String
    estadoProyecto: Boolean
    faseProyecto: faseProyecto
  }

  input ProyectoInput {
    nombreProyecto: String!
    objetivoGeneral: String!
    objetivosEspecificos: [String!]
    presupuesto: Int!
    estadoProyecto: Boolean!
    faseProyecto: faseProyecto!
  }

  type Token {
    token: String
  }

  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  type Query {
    #Usuarios
    obtenerUsuario(token: String!): Usuario
    obtenerProyecto(nombreProyecto: String!): Proyecto

  }

  type Mutation {
    crearUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token
    CrearProyecto(input: ProyectoInput): Proyecto

  }
`;

module.exports = typeDefs;
