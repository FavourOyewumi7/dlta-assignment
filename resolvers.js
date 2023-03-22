
const {Location} = require('./Location.js')

module.exports = {
    Query:{
     
           getLocation:async (_, { _id })=> {
            return await Location.findById(_id)
          

          },

         getLocations:async ()=> {
            console.log('working')
            return await Location.find()
          
        
    }
  },
    Mutation:{
        createLocation:async(parent,args,context,info)=>{
          
            const {country, year, area, population} = args
            const newLocation = new Location({ 
              country,
              year,
              area,
              population
              
            })
            
            
           
            return await newLocation.save()
            .then(result =>{
              return {...result._doc}

            }).catch (err => {
              console.error(err)
          })
            
          
        
        },

        editLocation: async(_, {_id,country, year, area, population})=>{
           
            const updated = (await Location.updateOne({_id:_id}, { 
              country:country,
              year:year,
              area:area,
              population:population
              
            })).modifiedCount
            return updated
          
          }
        ,
        deleteLocation:async(_, {_id})=>{
          const wasDeleted = (await Location.deleteOne({_id:_id})).deletedCount
          return wasDeleted
        }

    }
    }




