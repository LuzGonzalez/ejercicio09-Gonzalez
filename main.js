var mongoose = require('mongoose');
var schema = require ('./schema');

mongoose.connect('mongodb://localhost:27017/test')

//parameters are: model name, schema, collection name
var Book = mongoose.model('Book2',schema,'book2');

var book = new Book({
    title: 'La sangre de los libros',
    author:'Santiago Posteguillo',
    body: 'Descripcion del libro'
});

book.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});
