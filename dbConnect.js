const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://sit-725-2021:Harsha8897@sit-725-t2-week4.22slh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 
const client = new MongoClient(uri,{ useNewUrlParser: true})

let locationCollection;

const createColllection = (collectionName) => {
    client.connect((err,db) => {
        locationCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
} 

exports.MongoClient = MongoClient;