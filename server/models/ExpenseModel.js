

const mongoose = require("mongoose")

const ExpenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true ,
        trim:true ,

    },
    amount:{
        type:Number,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        default:"expense"
    },
    date:{
        type:Date,
        required:true,
        
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true})

const ExpenseModel = mongoose.model('expense',ExpenseSchema)


module.exports = ExpenseModel