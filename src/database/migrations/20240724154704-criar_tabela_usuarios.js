'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable('usuarios', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    cpf: {
      type: Sequelize.STRING(14),
      allowNull: false,
      unique: true
    },
    endereco: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    data_nascimento: {
      type: Sequelize.DATE,
      allowNull: false
    },
    sexo:{
      type: Sequelize.ENUM('Masculino', 'Feminino', 'Outro'),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(80),
      allowNull: false,
      unique: true
    },
    password: { 
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })


  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('usuarios');
     
  }
};
