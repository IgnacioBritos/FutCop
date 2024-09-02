import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";
import {Users} from "./Users.js";  // Asegúrate de importar el modelo User para establecer la relación

export  const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    number_of_players: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,  // Campo obligatorio para la fecha de inicio
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,  // Campo obligatorio para la fecha de finalización
    },
    location: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATEONLY,  
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,  
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(50),
        defaultValue: 'pending',
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,  // Referencia al modelo Users
            key: 'id',     // Clave primaria en el modelo Users
        },
        allowNull: false,
    }
}, {
    timestamps: false,  // Añade automáticamente createdAt y updatedAt
});

// Definir la relación entre User y Reservation
Reservation.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Reservation, { foreignKey: 'user_id' });

export default Reservation;
