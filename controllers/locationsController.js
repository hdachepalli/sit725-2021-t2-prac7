let Service = require('../services');

const getLocations = (res) => {
    console.log('controller')
    Service.LocationService.getAllLocations(res)
}

const createLocation = (data,res) => {
    Service.LocationService.insertLocation(data,res)
}

module.exports = {
    getLocations, createLocation
}