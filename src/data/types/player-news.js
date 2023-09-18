import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } from "graphql"

/**
 * This will change to Player. News will be read daily and on request, we dont save them
 */
export const PlayerNews = new GraphQLObjectType({
    name: "PlayerNews",
    fields: {
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