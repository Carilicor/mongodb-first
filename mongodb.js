import { MongoClient,ObjectId } from "mongodb";

import { uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")

const moviesCollections = db.collection("movies")
//console.log(await moviesCollections.findOne({}) )

let query = { title: { $regex: /star wars/i } } //serch for "terminator" anywhere in the title and ignore/not case sensitive
let movieArray = await moviesCollections
    .find(query)
    //.limit(3)
    .toArray()//makes it into an array

for (let i = 0; i < movieArray.length; i++) {
    console.log(movieArray[i].title) // how to request one item in an array(multiples)
}

// let firstMovie = (movieArray[0])
// console.log(firstMovie.title)



//console.log(`there are ${movieArray.length} movies`)  //does the same as line 9

//add a new movie

const newMovie = {
    title: "The Boca code story",
    rating: "R",
    genre: "comedy",
    releaseDate: "2022/12/16"
}

//const results = await moviesCollections.insertOne(newMovie)
//console.log("Results of inserts",results)


const updateQuery = { _id: new ObjectId("6345ca5edf027a7ad91e2831") }
const update = { $set: {title:"The New Boca Code Story"}}
const results = await moviesCollections.findOneAndUpdate(updateQuery,update);
console.log(results)


