const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bobby extends Model{}

Bobby.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        img: {
            type: DataTypes.STRING,
            name: DataTypes.STRING,
            data: DataTypes.BLOB("long"),
            allowNull: true
        },  

        team: {
            type: DataTypes.STRING,
            allowNull: false
        },

        is_goal: {
            type: DataTypes.STRING,
            allowNull: true
        },

        is_meg: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_celebration: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bobby'  
    }
);



module.exports = Bobby;