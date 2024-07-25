const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Usuario = connection.define("usuarios", {
  nome: {
    type: DataTypes.STRING,
  },
  cpf: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  data_nascimento: {
    type: DataTypes.DATE,
  },
  sexo: {
    type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'), 
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  }
});

module.exports = Usuario
;