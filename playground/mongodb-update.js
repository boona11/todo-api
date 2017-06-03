const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to the database');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5932389163c6c16bf1afcaf2')},
    //     {
    //         $set:{
    //             completed: false
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //         console.log(result);
    // });
    //
    db.collection('Users').findOneAndUpdate({name: 'Ibrahim Boona'},
        {
            $set:{
                name: 'Alshikh Sidi'
            },
            $inc:{
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
            console.log(result);
    });
    db.close();
});
