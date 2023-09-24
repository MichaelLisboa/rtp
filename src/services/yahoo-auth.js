import axios from "axios"
import yahooFantasy from "yahoo-fantasy";
import { Buffer } from 'buffer'

export class YahooFantasyAuth {
    constructor() {
        console.log("!!!!!!!!!!!!!!!HELLO WORLD!!!!!!!!!!!!");
    }
    static buildTokenURL() {
        console.log(process.env.GATSBY_YAHOO_FANTASY_BASE_URL)
        return `${process.env.GATSBY_YAHOO_FANTASY_BASE_URL}request_auth?client_id=${process.env.GATSBY_YAHOO_FANTASY_CLIENT_KEY}&redirect_uri=oob&response_type=code&language=en-us`
    }
    static async getToken (code) {
        const tokenGetterToken = `${process.env.GATSBY_YAHOO_FANTASY_CLIENT_KEY}:${process.env.GATSBY_YAHOO_FANTASY_CLIENT_SECRET}`
        const headers = {
            Authorization: `Basic ${Buffer.from(tokenGetterToken, "binary").toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
            response_type: "code"
        }
        const data = `grant_type=authorization_code&redirect_uri=oob&code=${code}`
        await axios.post(`${process.env.GATSBY_YAHOO_FANTASY_BASE_URL}get_token`, data, {
            headers: headers
        }).then(res => {
            localStorage.setItem("auth_token", res.data.access_token)
        }).catch(err => {
            console.log(err)
        })
    } 

    static async getUserTeams() {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`
        }
        await axios.get(`${process.env.GATSBY_YAHOO_FANTASY_BASE_URL}${/** we need the route for getting teams */"get_users"}`, {
            headers: headers
        }).then(res => {
            localStorage.setItem("teams", res.data.teams)
        }).catch(err => {
            console.log(err)
        })
    }
}