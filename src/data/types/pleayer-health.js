import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLID, GraphQLList } from "graphql"

/**
 * This will change to Player. News will be read daily and on request, we dont save them
 */
export const PlayerHealth = new GraphQLObjectType({
    name: "PlayerHealth",
    fields: {
      id: { type: GraphQLID },
      player: { type: GraphQLString },
      team: { type: GraphQLString },
      position: { type: GraphQLString },
      year: { type: GraphQLString },
      injury: { type: GraphQLString },
      injurySummary: { type: GraphQLString },
      medicalTerminology: { type: GraphQLString },
      playerInjuryScore: { type: GraphQLString },
      estReturnWeeks: { type: GraphQLString },
      estReturnMinDate: { type: GraphQLString },
      estReturnMaxDate: { type: GraphQLString },
      source: { type: GraphQLString },
      changeFromLastWeek: { type: GraphQLString },
      //outageByDay: { type: new GraphQLList(GraphQLString) }
    },
  })