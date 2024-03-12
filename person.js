const mongoose =require("mongoose")

const personshema= new mongoose.Schema({
    name:{type:String ,required:true},
    age :Number ,
    favfood: [String]
})
const Person =mongoose.model("people",personshema)

module.exports = Person