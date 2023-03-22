const {gql} = require("graphql-tag")
module.exports = gql`

type Location{
    _id:ID,
    country:String!,
    year:Int!,
    area:Int!,
    population:Int!
  }

type Query {
  getLocations: [Location]
  getLocation(_id: ID!): Location!
}

type Mutation{
  createLocation(country:String,
    year:Int,
    area:Int,
    population:Int): Location

editLocation(_id:ID!,country:String,
    year:Int, 
    area:Int,
    population:Int ): Boolean
deleteLocation(_id:ID!): Boolean
}
 `




 