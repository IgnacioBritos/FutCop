import Sequelize from "sequelize";

const sequelize = new Sequelize('FutCopDB', 'postgres', 'gaspar', {
    host: 'localhost',
    dialect: 'postgres',

})

export default sequelize;