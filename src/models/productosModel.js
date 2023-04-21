const { DataTypes } = require("sequelize");

import Sequelize from "../database";

const Product = Sequelize.define('productos',{
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },

    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull:true
    },
},
{
    timestamps:false,
}
);

export default Product