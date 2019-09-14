const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('5d716865d7d7dc36f14a87d4    ').then((todo) => {
    console.log(todo);
});