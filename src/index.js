import app from './app.js';
import sequelize from './DB/database.js';
import './models/Users.js'
import './models/Reservations.js'
async function main() {
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(3001);
        console.log("server is listening on port", 4000)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();
