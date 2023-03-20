import  {gql}  from "apollo-server-express"
export const typeDefs = gql`
type Location{
    Country:String,
    Year:Int,
    Area:Int,
    Population:Int
  }

input createLocationInput{
    Country:String,
    Year:Int,
    Area:Int,
    Population:Int
}

type Query {
  getLocations: [Location]
  getLocation(id: ID!): Location!
}


type Mutation{
  createLocation(createInput: createLocationInput): Location!
}

  `




 