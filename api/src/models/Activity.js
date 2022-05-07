const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('activity', {
        id: {
            
            primaryKey: true,
            type: DataTypes.INTEGER,
        },

        name: {
            type: DataTypes.STRING
        },

        dificultad: {
            type: DataTypes.STRING
        },
        duracion: {
            type: DataTypes.STRING
        },
        temporada: {
            type: DataTypes.STRING

        },


    },{
        timestamps: false,
    });


};