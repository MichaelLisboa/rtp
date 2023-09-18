import axios from "axios"

export class PlayerNews {
    static async getPlayerNews() {
        //configure axios config
        const playerFeed = await axios.get("https://hykc1u042j.execute-api.us-west-2.amazonaws.com/api-get-rtp-results")
        return playerFeed.data
    }
}