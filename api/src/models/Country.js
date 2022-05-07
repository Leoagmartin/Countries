const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
      name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,

      },
      continente: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      capital: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.TEXT,
        
      },
      area: {
        type: DataTypes.TEXT,
        
      },
      poblacion: {
        type: DataTypes.TEXT,
        
      },


  }, {
    timestamps: false,
  } );


};
