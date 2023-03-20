//import Infos from "./datasources/Info";
import { Location as LocationModel } from "./models/Location.js"




export const resolver = {
    Query:{
           getLocation:async (_, { id })=> {
            return await LocationModel.findById(id)
          

          },

         getLocations:async ()=> {
            // _, args,  { dataSources: { Infos } }
            return await LocationModel.find()
           // return  Infos.getInfos(args)}
        
    },
    Mutation:{
        createInfo:async(_, {Country, Year, Area, Total_population})=>{
            const randomId = Math.random().toString().split('.')[1];
            const newLocation = new LocationModel({ 
              _id: randomId,
              Country: Country,
              Year:Year,
              Area:Area,
              Total_population:Total_population  
            })
            const res = await newLocation.save()
            console.log(...res._doc)
            return{
              id:res.id,
              ...res._doc
            }
            //Infos.createInfo(args)
        }

    }
    }

}

