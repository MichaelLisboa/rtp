import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { YahooFantasyAuth } from "../services/yahoo-auth"
import "./test.css"

const loginPage = () => {
  let userCode = "test"
  const onButtonClicked = async () => {
    console.log(userCode)
    localStorage.setItem("userCode", userCode)
    await YahooFantasyAuth.getToken(userCode)
    await YahooFantasyAuth.getUserTeams()
  }
  const onCodeChange = (val) => {
    console.log(val)
    userCode = val
  }
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Login/Register
      </h1>
      {/* The below line builds the URL to get the yahoo fantasy code
          The user must copy the code, click back and we need an input button to save their code
          and get the token.

          Only then can we retreive their teams
      */}
      <a href={YahooFantasyAuth.buildTokenURL()}>Connect to Yahoo! Fantasy</a>
      <br />
      <input name="code" value={userCode} onChange={onCodeChange} />
      {/* We might need another input to get the user nickname(usually their first name, but not always), so we can get their teams */}
      <br />
      <button name="submit" onClick={onButtonClicked} >Submit code</button>
    </Layout>
  )
}

export default loginPage

export const Head = () => <title>Sign in or Register</title>
