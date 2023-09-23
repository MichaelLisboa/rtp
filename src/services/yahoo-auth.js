import axios from "axios"
import yahooFantasy from "yahoo-fantasy";

export class YahooFantasyAuth {
    constructor() {
        console.log("!!!!!!!!!!!!!!!HELLO WORLD!!!!!!!!!!!!");
    }
    buildTokenURL() {
        
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