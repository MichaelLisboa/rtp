import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { GET_PLAYER_NEWS } from './queries/player-news'

/**
 * Need entity structures before creating user and player entities
 */
const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getPlayerNews: GET_PLAYER_NEWS
    }
})

const Mutation = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {}
})



export const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation
})