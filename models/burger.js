// const ormJs = require("orm.js");

const Sequelize = require('sequelize')

// Create the function for the 
// magic index file to make
// the things work
module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define('burgers', {

        // define the schema --->add id: an auto incrementing int that serves as 
        // the primary key.

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    // make every thing work with db
    // do this in the index for the server
    // Burger.sync();



    // return it so it is on the db 
    // and we can use it!
    return Burger;
};