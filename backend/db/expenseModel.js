const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    usersid : {
        type :  mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'users'
    },
    amount : {
        type : Number,
        required : true 
    },
    category : {
        type : String,
        required : true,
    },
    date : {
        type: String,
        required : true,
    }
},{
    timestamps : true
})

const expenseModel = mongoose.model('expenses' , expenseSchema);

module.exports = expenseModel;