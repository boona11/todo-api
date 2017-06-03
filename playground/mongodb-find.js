const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to the database');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5932389163c6c16bf1afcaf2')
    // }).toArray().then(
    //     (doc) => {
    //         console.log('Todos List: ');
    //         console.log(JSON.stringify(doc, undefined, 2));
    //     },
    //     (err) => {
    //         console.log('There was an error', err);
    //     }
    // )
    //
    db.collection('Users').find({name:'Ibrahim Boona'}).toArray().then(
        (doc) => {
            console.log('Users List');
            console.log(JSON.stringify(doc, undefined, 2));
        },(err) => {
            console.log('There was an error ', err);
        }
    );

    //db.close();
});
