const Sequelize=require('sequelize');
const mysql2=require('mysql2')
//import de los modelos
const Model_Shippings=require('../models/Shippings');
//configuracion de la url de la bd
const sequelize = new Sequelize('btdpvkgly7p94oa64ivj', 'uhibvwtve2j9bu3t', 'iD0JOwED1JOdgMfVUE4t', {
    host: 'btdpvkgly7p94oa64ivj-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    dialectModule: mysql2,
});
//creando la tablas tablas
// const Cuentas=Model_Cuentas(sequelize,Sequelize);
const Shippings=Model_Shippings(sequelize,Sequelize);

sequelize.sync()
    .then(()=>{
        console.log('Tablas creadas');
    })
module.exports={
    Shippings
}
