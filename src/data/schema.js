import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { GET_PLAYER_HEALTH } from './queries/player-health'
import { CREATE_PLAYER_HEALTH } from './mutations/add-player-health'

/**
 * Need entity structures before creating user and player entities
 */
const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getPlayerNews: GET_PLAYER_HEALTH
    }
})

const Mutation = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        createPlayerHealth: CREATE_PLAYER_HEALTH
    }
})



export const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation
})