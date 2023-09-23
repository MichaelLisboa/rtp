import axios from "axios"
import yahooFantasy from "yahoo-fantasy";

export class YahooFantasyAuth {
    constructor() {
        console.log("!!!!!!!!!!!!!!!HELLO WORLD!!!!!!!!!!!!");
    }
    buildTokenURL() {
        const YAHOO_FANTASY_BASE_URL="https://api.login.yahoo.com/oauth2/"
        const YAHOO_FANTASY_CLIENT_KEY="dj0yJmk9TXp4SnJnV1JadzlLJmQ9WVdrOVJqVnFTbWN5TmpVbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTYy"
        const YAHOO_FANTASY_CLIENT_SECRET="34ab525f0da9a3b000d7aa50101d9ae652f54e50"
        return `${YAHOO_FANTASY_BASE_URL}request_auth?client_id=${YAHOO_FANTASY_CLIENT_KEY}&redirect_uri=oob&response_type=code&language=en-us`
    }
    getToken (code) {
        // axios.get(`YAHOO_FANTASY_BASE_URL`, {
        //     headers: {
        //         client_id: YAHOO_FANTASY_CLIENT_KEY,
        //         redirect_uri: "oob",
        //         response_type: "code"
        //     }
        // }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
    } 
}