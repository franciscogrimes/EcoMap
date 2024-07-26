const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Pontos = connection.define("pontos", {
    usuario_id: {
    type: DataTypes.INTEGER,
  },
  nomeLocal: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  cep: {
    type: DataTypes.STRING,
  },
  latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
        type: DataTypes.STRING,
    },
    residuo: {
      type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'), 
    },
});

module.exports = Pontos
;