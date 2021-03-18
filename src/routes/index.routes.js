const { Router } = require('express');

const routerMethod = Router();


// controllers
const { cities, states } = require('../controllers/locations.controller');


routerMethod.get('/states',states)


routerMethod.get('/cities',cities);


module.exports = routerMethod;
