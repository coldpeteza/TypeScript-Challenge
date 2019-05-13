const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://db:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {

    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection('inventory').insertMany([
        // MongoDB adds the _id field with an ObjectId if _id is not present
        { item: "journal", qty: 25, status: "A",
            size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
        { item: "notebook", qty: 50, status: "A",
            size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
        { item: "paper", qty: 100, status: "D",
            size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
        { item: "planner", qty: 75, status: "D",
            size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
        { item: "postcard", qty: 45, status: "A",
            size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
    ])
        .then(function(result) {
            // process result

        }).finally(
        () => client.close()
    );
});
