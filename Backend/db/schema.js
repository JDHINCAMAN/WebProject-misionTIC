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
  }

  type Mutation {
    crearUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token
  }
`;

module.exports = typeDefs;
