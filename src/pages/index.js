import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Index
      </h1>
      <Link to="/login/">Get Started</Link>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
