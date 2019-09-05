const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5d716865d7d7dc36f14a87d4';
var w_id = '6d716865d7d7dc36f14a87d4';
id = w_id;

Todo.find({
    _id: id
}).then((todos) => {
    todos.forEach(todo => {
        if(!todo)
            return console.log("Id not found");
        console.log("Todos: ", todo._doc);  
    });
})

console.log("-------------------");

//findOne grabs the first one that matcjhes te query you have
Todo.findOne({
    _id: id
}).then((todo) => {
    if(!todo)
        return console.log("Id not found");
    console.log("Todo: ", todo._doc);
});

console.log("-------------------");

//findById: lets us find a document by it's identifier
Todo.findById(id).then((todo) => {
    if(!todo)
        return console.log("Id not found");
    console.log("Todo By Id: ", todo._doc);
});