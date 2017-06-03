const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to the database');

    //Delete Many
    db.collection('Todos').deleteMany({text: 'Larabas'}).then((result) => {
        console.log(result);
    })
    //Delete one
    db.collection('Todos').deleteOne({text: 'Larabas'}).then((result) => {
        console.log(result);
    })
    //Find one and Delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })
    //db.close();
});
