import { GraphQLList } from 'graphql'
import { PlayerHealth } from '../types/pleayer-health'

export const GET_PLAYER_HEALTH = {
    type: new GraphQLList(PlayerHealth),
    resolve: () => {
        return []
    } 
}