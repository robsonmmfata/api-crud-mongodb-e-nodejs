const mongoose = require('mongoose')

const Person = mongoose.model('Person',{
    nome:String,
    salary:Number,
    approved:Boolean,
})

module.exports = Person