//import Infos from "./datasources/Info";
import { Location as LocationModel } from "./models/Location.js"




export const resolver = {
    Query:{
           getLocation:async (_, { id })=> {
            return await LocationModel.findById(_id)
          

          },

         getLocations:async ()=> {
            console.log('working')
            return await LocationModel.find()
          
        
    },
    Mutation:{
        createLocation:async(_, {createInput: {Country, Year, Area, Population}})=>{
            // const randomId = Math.random().toString().split('.')[1];
            const newLocation = new LocationModel({ 
              Country:Country,
              Year:Year,
              Area:Area,
              Population:Population 
              
            })
            const res = await newLocation.save()
            console.log("PLease work in the name of Jesus")
            console.log(res)
            return{
             id:res.id,
              ...res._doc
            }
        
        }

    }
    }

}

