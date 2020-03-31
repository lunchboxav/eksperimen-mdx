import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Klik link di bawah untuk melihat hasil render MDX</p>
    <div>
      <Link to="/gateway_group.pb">Hasil render MDX</Link>
    </div>
    <div>
      <Link to="/gateway_group.html">File HTML referensi</Link>
    </div>
  </Layout>
)

export default IndexPage
