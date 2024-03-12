const express = require("express")

require("dotenv").config()
const mongoose = require("mongoose")
const Person = require("./person")
const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("true");
    } catch (err) {
        console.log(errorr);
    }
}
connect()
// Task1
let person = new Person({
    name: "azer",
    age: 20,
    favfood: ["banna", "apple", "kouskous", "pizz"]
})
const savePerson = async () => {
    try {
        await person.save()
    } catch (error) {
        console.log("cantsave");
    }
}
//  savePerson()
// task2
let persons = [{
    name: "iheb",
    age: 20,
    favfood: ["kouskous", "pizz"]
}, {
    name: "AMINE",
    age: 11,
    favfood: ["pizz"]
},
    {
        name: "djo",
        age: 3,
        favfood: ["kouskous", "pizz", "frikasii"]
    }, {
    name: "mohamed",
    age: 30,
    favfood: ["kouskous"]
}]

const saveManyPerson = async () => {
    try {
        await Person.create(persons)
    } catch (error) {
        console.log("cantsave");
    }
}
// saveManyPerson()
// task3
const FindPerson = async () => {
    try {
     const findIt= await Person.findOne({name :"azer"})
    //  const findIt= await Person.findOne({name :"azer"})
     console.log(findIt);
    } catch (error) {
        console.log("cantfind");
    }
}
// FindPerson()
// task4
const FindONePerson = async () => {
    try {
     const findIt= await Person.findOne({favfood:"kouskous"})
     console.log(findIt);
    } catch (error) {
        console.log("cantfind");
    }
}
// FindONePerson()
// task 5
const FindbyID = async () => {
    try {
     const findIt= await Person.findById("65e9fc29e1684209937d91ff")
     console.log(findIt);
    } catch (error) {
        console.log("cantfind");
    }
}
// FindbyID()
// task7
const Findoneupdate = async () => {
    try {
     const findIt= await Person.findOneAndUpdate({name:"azer" },{age:29})
     console.log(findIt);
    } catch (error) {
        console.log("cantfind");
    }
}
// Findoneupdate()
// task6
const Findupdate = async () => {
    try {
     const findIt= await Person.findById("65e9f7a06959104768383b5f")
     findIt.favfood.push("hamburger")
     findIt.save()
     console.log(findIt);
    } catch (error) {
        console.log("cantfind");
    }
}
// Findupdate()
// task 8
const Finddelete = async () => {
    try {
     const deleteit = await Person.findByIdAndDelete("65e9fc29e1684209937d9200") 
     console.log("delete");
    } catch (error) {
        console.log("cantfind");
    }
}
// Finddelete()
// task10
const romveall = async () => {
    try {
      await Person.remove() 
     console.log("delete");
    } catch (error) {
        console.log("cantfind");
    }
}
// romveall()
// task 11
async function chainSearch() {
    try {
        const people = await Person.find({ favoriteFoods: 'burritos' })
            .sort({ name: 1 }) 
            .limit(2) 
            .select({ name: 1 }); 

        console.log('People who like burritos:', people);
    } catch (error) {
        console.log("non non");
    }
}
chainSearch()

const app = express()

const PORT = process.env.PORT

app.listen(PORT, (err) => {
    err ? console.log(err) :
        console.log("port running");
})