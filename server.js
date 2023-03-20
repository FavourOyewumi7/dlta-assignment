const express = require("express");
const {ApolloServer} = require('apollo-server-express');
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const mongoose = require("mongoose")


const starter =async()=>{
    
    const uri = "mongodb+srv://oyewumifavour65:Blackbullet7@oyewumi.u9trz15.mongodb.net/dlta_assignment?retryWrites=true&w=majority";

    try{
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('DB connected successfully')
    }
    catch(err){
        console.log(err)
    }
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers});
    await server.start()
    server.applyMiddleware({app: app})
    const port = 8000
    app.use((req,res)=>{
        res.send("Hello from express")
    })
    app.listen(port, () => {
        console.log("starting the server")
        });
 
}

starter();





