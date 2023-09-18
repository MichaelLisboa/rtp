import { GraphQLList } from 'graphql'
import PlayerNews from '../types/player-news'

export const GET_PLAYER_NEWS = {
    type: new GraphQLList(PlayerNews),
    resolve: () => {
        return []
    } 
}