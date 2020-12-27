import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { TopAccroche, Title1, Title2, Btn } from "../styles/styled"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <TopAccroche style={{ marginBottom: "7rem" }}>
      <div>
        <Title1>Oh désolé mais cette page n'existe pas</Title1>
        <Title2>404: Not Found</Title2>
        <Link to="/">
          <Btn>Page d'accueil</Btn>
        </Link>
      </div>
    </TopAccroche>
  </Layout>
)

export default NotFoundPage
