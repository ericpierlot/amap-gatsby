import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// Images
import ArrowRight from "../images/fleches-04.png"
import ArrowLeft from "../images/fleches-05.png"
import { Title1, Title2, Btn, Wrapper, TopWrapper } from "../styles/styled"

const Bloc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #7a7a7a;
  p {
    text-align: center;
    padding-bottom: 0.5rem;
  }
  margin-bottom: 3rem;
`
const Adhesion = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 80%;
  }
  @media (max-width: 740px) {
    width: 90%;
  }
`
const Top = styled.div`
  background-color: #54595f;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h2 {
    width: 60%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
  }
`

const Content = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  min-height: 370px;
  text-align: center;
  display: flex;

  align-items: center;
  flex-direction: column;

  h2 {
    color: #54595f;
    padding-top: 2rem;
    font-size: 4rem;
    width: 200px;
    flex: 1;
    &::first-letter {
      font-size: 1.5rem;
      vertical-align: top;
      padding-right: 0.5rem;
    }
    &:after {
      content: "/ par an";
      font-size: 1rem;
      vertical-align: bottom;
    }
    padding-bottom: 2rem;
  }

  p {
    font-size: 0.9rem;
  }
  div {
    margin: 1rem 0;
    width: 80%;
    border-top: 2px solid white;
  }

  button {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
    a {
      color: white;
    }
  }
`

const Wrapped = styled(Wrapper)`
  flex-direction: row;
  gap: 2rem;
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

const Devenir = () => {
  return (
    <Layout>
      <SEO title="Devenir membre" />
      <Wrapper>
        <TopWrapper style={{ justifyContent: "space-around" }}>
          <img src={ArrowLeft} alt="Flèche de direction à gauche" />
          <Title2>Devenir membre</Title2>
          <img src={ArrowRight} alt="Flèche de direction à droite" />
        </TopWrapper>
      </Wrapper>
      <Wrapper style={{ marginTop: "0" }}>
        <Bloc>
          <Title1>Pourquoi devenir membre ?</Title1>
          <p>
            Une{" "}
            <strong>
              Association pour le Maintien d’une Agriculture Paysanne
            </strong>{" "}
            est composée de consommateurs{" "}
            <em>
              <strong>(dits Amapiens)</strong>
            </em>{" "}
            qui deviennent partenaires d’une ferme.
          </p>
          <p>
            Un <strong>engagement contractuel</strong> permet au paysan
            d’assurer à l’avance la commercialisation de ses produits et à
            l’Amapien d’obtenir un panier des{" "}
            <strong>produits de la ferme</strong>.
          </p>
        </Bloc>
      </Wrapper>
      <Wrapped>
        <Adhesion>
          <Top>
            <h2>Adhésion simple à l'AMAP</h2>
            <p>AMAP Isle-sur-la-Sorgue</p>
          </Top>
          <Content>
            <h2>€21</h2>
            <p>11 euros reversés au Réseau AMAP</p>
            <div></div>
            <p>9 euros pour le fonctionnement de L'AMAP Isle-sur-la-Sorgue</p>
            <a
              href="https://www.helloasso.com/associations/amap-isle-sur-la-sorgue/adhesions/adhesion-annuelle-amap-isle-sur-la-sorgue"
              target="blank"
            >
              <Btn>J'adhère !</Btn>
            </a>
          </Content>
        </Adhesion>
        <Adhesion>
          <Top>
            <h2>Adhésion double à l'AMAP + La Cigalette</h2>
            <p>AMAP Isle-sur-la-Sorgue + Association la Cigalette</p>
          </Top>
          <Content>
            <h2>€28</h2>
            <p>11 euros reversés au Réseau AMAP</p>
            <div></div>
            <p>11 euros pour l'Association La Cigalette</p>
            <div></div>
            <p>9 euros pour le fonctionnement de L'AMAP Isle-sur-la-Sorgue</p>
            <a
              href="https://www.helloasso.com/associations/amap-isle-sur-la-sorgue/adhesions/adhesion-annuelle-amap-isle-sur-la-sorgue-association-la-cigalette"
              target="blank"
            >
              <Btn>J'adhère !</Btn>
            </a>
          </Content>
        </Adhesion>
      </Wrapped>
    </Layout>
  )
}

export default Devenir
