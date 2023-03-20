import  {gql}  from "apollo-server-express"
export const typeDefs = gql`
type Location{
    # _id:ID!,
    Country:String!,
    Year:Int!,
    Area:Int!,
    Total_population:Int!,
  }


type Query {
  getLocations: [Location!]!
  getLocation(id: ID!): Location!
}


type Mutation{
  createLocation(Country:String!,Year:Int!,Area:Int!,Total_population:Int!): Location!
}

  `



 