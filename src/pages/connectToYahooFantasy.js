import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const connectYahooPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Connect to Yahoo! Fantasy
      </h1>
    </Layout>
  )
}

export default connectYahooPage

export const Head = () => <title>Connect to Yahoo! Fantasy</title>
