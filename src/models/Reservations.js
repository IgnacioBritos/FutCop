import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";
import {Users} from "./Users.js";  // Asegúrate de importar el modelo User para establecer la relación

export  const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATEONLY,  
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,  
        allowNull: false,
    },
    number_of_players: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING(50),
        defaultValue: 'pending',
    }
}, {
    timestamps: true,  // Añade automáticamente createdAt y updatedAt
});

// Definir la relación entre User y Reservation
Reservation.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Reservation, { foreignKey: 'user_id' });

export default Reservation;
