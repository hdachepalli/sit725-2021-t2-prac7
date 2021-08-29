let client = require("../dbConnect");
let locationsCollection;
//setTimeout(() => {
  //locationsCollection = client.mongoClient.db("Tour").collection("locations");

//}, 3000)

const getAllLocations = (res) => {
    locationsCollection.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result)
    })
}

const insertLocation = (location, res) => {
    locationsCollection.insertOne(location, (err, result) => {
        console.log('Location has successfully placed', result)
        res.send({ result: 200 })
    })
}



module.exports = {
    getAllLocations, insertLocation
}