import { PlayerHealth } from "../types/pleayer-health";

export const CREATE_PLAYER_HEALTH  = {
    type: PlayerHealth,
    args: {
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
    resolve(parent, args) {
        const { player, team, position } = args
        return args
    }
}