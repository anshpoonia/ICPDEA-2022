const {MongoClient} = require('mongodb');
const express = require('express');

const MONGOURI = "mongodb+srv://admin:adminpassword4321@cluster0.lokrddg.mongodb.net/?retryWrites=true&w=majority";

const MONGOCLIENT = new MongoClient(MONGOURI);

MONGOCLIENT.connect()
    .then(res => console.log("MongoDB has connected"))
    .catch(err => {
        throw err;
    });

const app = express()
    .use([express.urlencoded(), express.json(), express.static(__dirname+"/public")]);

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public/home/index.html");
});

app.post('/ICPDEA/registration', async (req, res) => {

    const document = {
        name: req.body.name,
        affiliation: req.body.affiliation,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        address: req.body.address,
        isBMU: req.body.isBMU,
        gender: req.body.gender
    }

    const response = await MONGOCLIENT.db('ICPDEA').collection('registration_data').insertOne(document);
    res.json({code: "SUCCESS"});
});

app.listen(4000, () => console.log('Server is up!'))
