import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  TopAccroche,
  Title1,
  Title2,
  Btn,
  ImageWave,
  GreenBlock,
} from "../styles/styled"

const AssociationPage = () => (
  <Layout>
    <SEO title="L'association" />
    <TopAccroche>
      <Title1>Manger local & bio</Title1>
      <Title2>Une amap c'est quoi ?</Title2>
    </TopAccroche>
  </Layout>
)

export default AssociationPage
