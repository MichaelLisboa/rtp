import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLID } from "graphql"

/**
 * This will change to Player. News will be read daily and on request, we dont save them
 */
export const PlayerNews = new GraphQLObjectType({
    name: "PlayerNews",
    fields: {
      id: { type: GraphQLID },
      player: { type: GraphQLString },
      source: { type: GraphQLString },
      handle: { type: GraphQLString },
      date: { type: GraphQLString },
      text: { type: GraphQLString },
      injuryNewsWorthy: { type: GraphQLBoolean },
      mediaType: { type: GraphQLString },
      mediaUrl: { type: GraphQLString },
    },
  })