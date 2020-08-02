const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log(err)
    }
    const db = client.db(databaseName);

    db.collection('users').insertOne({
        name: 'jai',
        age: 21
    })
})