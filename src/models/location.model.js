const  connection  = require("../database/config.database");


const getStates = () => {
    return new Promise( (resolve, reject) => {
            connection.query('SELECT * FROM provincia',
            (err, result) => {
                if (err) reject(err);
                else resolve( result );
            }
        )
    }) 
}

const getCities = (id_state) => {
    return new Promise((resolve, reject) =>{
            connection.query(`SELECT nombre FROM localidad  WHERE (id_provincia=${id_state})`,
            (err, result) =>{
                if (err) reject(err);
                else resolve(result);
            })
    })  
    
}


module.exports = {
    getStates,
    getCities
}