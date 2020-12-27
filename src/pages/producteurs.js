import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Images
import styled from "styled-components"
import ArrowRight from "../images/fleches-04.png"
import ArrowLeft from "../images/fleches-05.png"
import Oeuf from "../images/egg.png"
import Pain from "../images/loaf.png"
import Miel from "../images/honey.png"
import Pomme from "../images/apple-1.png"
import { Title1, Title2, Wrapper, TopWrapper } from "../styles/styled"
import { CardAutres } from "../components/CardAutres"
import Salade from "../images/salad-e1582533592768.png"

const ContainerAutres = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 80%;
    flex-direction: column;
  }
  @media (max-width: 740px) {
    width: 90%;
    flex-direction: column;
  }
`
const Separation = styled.div`
  width: 60%;
  margin: auto;
  border-top: 1px solid black;
  text-align: center;
`

const ProducteursPage = () => (
  <Layout>
    <SEO title="Les producteurs" />
    <Wrapper>
      <TopWrapper>
        <img src={ArrowLeft} alt="Flèche de direction à gauche" />
        <Title2>Découvrez nos producteurs</Title2>
        <img src={ArrowRight} alt="Flèche de direction à droite" />
      </TopWrapper>
      <Title1>Producteurs permanents</Title1>
      <ContainerAutres>
        <CardAutres
          image={Salade}
          alt="Bol de légumes"
          title2="Antoine ESTEBAN"
          metier="Producteur de légumes BIO"
        />
        <CardAutres
          image={Oeuf}
          alt="Dessin d'oeufs"
          title2="Elisabeth COMPANY"
          metier="Éleveuse de volailles & productrice d'oeufs BIO"
        />
        <CardAutres
          image={Pain}
          alt="Dessin de pain"
          title2="Julie SAINTOUL & Romain VEPIERRE"
          metier="La Conquête du Pain BIO"
        />
      </ContainerAutres>
    </Wrapper>
    <Separation></Separation>
    <Wrapper>
      <Title1>Producteurs saisonniers</Title1>
      <ContainerAutres style={{ justifyContent: "center" }}>
        <CardAutres
          image={Pomme}
          alt="Un dessin d'une Pomme"
          title2="Frederic SOULA"
          metier="Pommes & Raisins BIO"
        />
        <CardAutres
          image={Miel}
          alt="Un pot de miel"
          title2="Malvina Malbec & Clément Aude"
          metier="Producteur de Miel & Lavance BIO"
        />
      </ContainerAutres>
    </Wrapper>
  </Layout>
)

export default ProducteursPage
