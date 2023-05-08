module.exports=(sequelize,type)=>{
    const Shipp=sequelize.define('Shipp',{
        id:{
            type:type.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        nombreUsuario:{
            type:type.STRING,
            allownull:false
        },
        nombreProveedor:{
            type:type.STRING,
            allownull:false
        },
        statusShipping:{
            type:type.STRING,
            allownull:false
        },
        date:{
            type:type.DATEONLY,
            allownull:false
        },
        origin:{
            type:type.STRING,
            allownull:false
        },
        destination:{
            type:type.STRING,
            allownull:false
        },
    },{
        timestamps:false
    })
    return Shipp;
}