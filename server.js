import  express from 'express';
import { ApolloServer} from 'apollo-server-express';
import {resolver} from './resolvers.js';
import {typeDefs} from './typeDefs.js';
import mongoose from 'mongoose';
//import { Info as InfoModel } from './models/Info.js';







const starter =async()=>{
    // const dataSources = () => ({
    //     Infos: new Infos(InfoModel)
    // })
    const uri = "mongodb+srv://oyewumifavour65:Blackbullet7@oyewumi.u9trz15.mongodb.net/dlta_assignment?retryWrites=true&w=majority";

    try{
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('DB connected successfully')
    }
    catch(err){
        console.log(err)
    }
    const app = express();
    const server = new ApolloServer({ typeDefs, resolver});
    await server.start()
    server.applyMiddleware({ app, path: '/' })
    const port = 8080
    app.listen(port, () => {
        console.log("starting the server"),
        console.log(`Check it out on https://localhost:${port} `)});
   

   


    // const port = 8000;

  
}

starter()





