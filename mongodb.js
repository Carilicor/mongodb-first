import { MongoClient } from "mongodb";

import {uri } from "./credentials.js"

const client = new MongoClient(uri)
const db = client.db("sample_mflix")

const moviesCollections = db.collection("movies")
//console.log(await moviesCollections.findOne({}) )

let query = {title:{ $regex:/terminator/i}} //serch for "terminator" anywhere in the title and ignore/not case sensitive
let movieArray = await moviesCollections.find(query).limit(3).toArray()

for(let i=0; i < movieArray.length; i++) {
    console.log(movieArray[i].title)
}

// let firstMovie = (movieArray[0])
// console.log(firstMovie.title)



console.log(`there are ${movieArray.length} movies`)  //does the same as line 9