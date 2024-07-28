'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable('pontos', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      allowNull: false
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    nomeLocal: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    descricao: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    cep: {
      type: Sequelize.STRING(9),
      allowNull: false,
      unique: true
    },
    latitude: {
      type: Sequelize.STRING(15),
      allowNull: true
    },
    longitude:{
      type: Sequelize.STRING(15),
      allowNull: true
    },
    residuo:{
      type: Sequelize.ENUM('Vidro', 'Papel', 'Plástico', 'Aluminio', 'Organico', 'Papelao', 'Pilhas', 'Todos'),
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

    await queryInterface.dropTable('pontos');
     
  }
};
