import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const loginPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Login/Register
      </h1>
      <Link to="/connectToYahooFantasy/">Connect to Yahoo! Fantasy</Link>
    </Layout>
  )
}

export default loginPage

export const Head = () => <title>Sign in or Register</title>
