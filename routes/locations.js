var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");

router.get('/', (req,res) => {
    Controllers.locationsController.getLocations(res);

})

router.post('/', (req,res) => {
    Controllers.locationsController.createLocation(req.body,res)
})

module.exports = router;