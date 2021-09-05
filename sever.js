require('dotenv').config()
var express = require("express")
var app = express()
let dbConnect = require ("./dbConnect");
const MongoClient = require('mongodb').MongoClient;
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let locationCollection;

let locationsRoute = require('./routes/Locations')

const uri = "mongodb+srv://sit-725-2021:Harsha8897@sit-725-t2-week4.22slh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 
const client = new MongoClient(uri,{ useNewUrlParser: true})

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/locations',locationsRoute)

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

const cardList = [

]

const insertLocations = (location,callback) => {
    locationCollection.insert(location,callback);
}

const getLocations = (callback) => {
    locationCollection.find({}).toArray(callback);
}

app.get('/api/locations',(req,res) => {
    getLocations((err,result) => {
        if(err) {
            res.json({statusCode: 400, message:err})
        }
        else {
             res.json({statusCode: 200, message:"Success", data: result})
        }
     })
})

app.post('/api/locations',(req,res) => {
    console.log("New Location added", req.body)
    var newLocation = req.body;
    insertLocations(newLocation,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
      }
        else {
            res.json({statusCode: 200, message:"Location has Successfully placed", data: result})
        }
     })
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    setInterval(()=>{
      socket.emit('number', parseInt(Math.random()*10));
    }, 1000);
  
  });
var port = process.env.port || 4000;

app.listen(port, () => {
    console.log("App listening to: " + port);
    createColllection("New Locations")
})