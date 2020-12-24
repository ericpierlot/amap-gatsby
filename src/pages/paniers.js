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

const PaniersPage = () => (
  <Layout>
    <SEO title="Les paniers" />
    <TopAccroche>
      <div>
        <Title1>Manger local & bio</Title1>
        <Title2>Une amap c'est quoi ?</Title2>
      </div>
    </TopAccroche>
  </Layout>
)

export default PaniersPage
