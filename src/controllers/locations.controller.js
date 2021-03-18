const { response } = require('express');
const { getStates, getCities } = require('../models/location.model');



const cities = ( req,res ) => {
    console.log(req.body);
    const { id } = req.body;
    getCities( id )
        .then((result) =>{
            return res.status(200).json({
                ok: true,
                data: result
            })
        })
        .catch((err) =>{
            return  res.status(500).json({
                ok: false,
                msg: `error: ${err}`
                
            })
        })
}

const states = ( req,res ) => {
    getStates()
    .then( ( result ) => {

        return res.status(200).json({
            ok: true,
            data: result 
        })
    })
    .catch( (err) => {
        return res.status(500).json({
            ok: false,
            msg: `algo fallo: ${err}`
        })
    })
}


module.exports = {
    cities,
    states
}