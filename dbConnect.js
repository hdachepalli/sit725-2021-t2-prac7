const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://harsha:reddy@cluster0.22slh.mongodb.net/Tour" 
const client = new MongoClient(uri,{ useNewUrlParser: true})

let locationCollection;

const createCollection = (collectionName) =>  {
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