const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to the database');

    // db.collection('Todos').insertOne({
    //     text: 'This is the Second task',
    //     completed: true
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.collection('Users').insertOne({
        name: 'Khalid Slim',
        age: 33,
        location: 'Saudi Arabia'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});
