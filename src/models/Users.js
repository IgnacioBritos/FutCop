import { DataTypes  } from "sequelize";
import sequelize  from "../DB/database.js";

export const Users = sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,

    },
    name:{
        type: DataTypes.STRING(35),
        allowNull: false, 
    },
    email: {
        type: DataTypes.STRING(100),  
        allowNull: false,  
        unique: true,  
        validate: {
            isEmail: true,  
        }
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: true,  
    }

},{
    timestamps:false,
})