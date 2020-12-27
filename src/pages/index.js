import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
// Images
import ArrowRight from "../images/fleches-04.png"
import ArrowLeft from "../images/fleches-05.png"
import ProducteurAmapien from "../images/PRODUCTEUR-AMAPIEN-02-1024x922.jpg"
import Pommes from "../images/pommes2000px-1024x682.jpg"
import Poules from "../images/AdobeStock_220277518-1024x465.jpeg"
import Miel from "../images/POT-DE-MIEL2000px-1024x682.jpg"
import Pain from "../images/PAIN-BIO-COMPLET-scaled-1-1024x576.jpeg"

import {
  TopAccroche,
  Title1,
  Title2,
  Btn,
  ImageWave,
  GreenBlock,
  Container,
  BlocText,
  Wrapper,
  TopWrapper,
} from "../styles/styled"

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
`

const BlocImages = styled.div`
  display: flex;

  @media (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    position: relative;
    height: 180px;

    cursor: pointer;
    span {
      position: absolute;
      display: flex;
      opacity: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 1rem;
      text-align: center;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      background-color: #abd8bb;
      transition: opacity 800ms ease;
    }
    &:hover span {
      opacity: 1;
    }
  }

  img {
    width: auto;
    height: 100%;

    @media (min-width: 1150px) {
      width: 220px;
      height: auto;
    }

    @media (min-width: 1600px) {
      width: auto;
      height: 100%;
    }
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Légumes, oeuf, pain bio" />
      <TopAccroche>
        <div>
          <Title1>Je participe au maintien de</Title1>
          <Title2>L'agriculture paysane</Title2>
          <Btn>Adhérer</Btn>
        </div>
      </TopAccroche>
      <ImageWave></ImageWave>
      <GreenBlock>
        <p>
          Aujourd'hui, il est devenu essentiel de protéger notre agriculture et
          nos paysans.
        </p>
        <p>
          En adhérant à l'amap vous contribuez à une agriculture juste et
          équitable, engagée et solidaire. Vous soutenez les producteurs locaux.
        </p>
      </GreenBlock>
      <Container>
        <BlocText>
          <Title1>Qu'est-ce qu'une AMAP ?</Title1>
          <p>
            Une{" "}
            <strong>
              Association pour le Maintien d’une Agriculture Paysanne
            </strong>{" "}
            est composée de consommateurs (<strong>dits Amapiens</strong>) qui
            deviennent partenaires d’une ferme.Un{" "}
            <strong>engagement contractuel</strong> permet au paysan d’assurer à
            l’avance la commercialisation de ses produits et à l’Amapien
            d’obtenir un panier des <strong>produits de la ferme.</strong>
          </p>
          <p
            style={{
              paddingTop: "1.5rem",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            <a
              href="https://www.amap-islesursorgue.fr/aptymemo/2019/09/Charte_des_AMAP.pdf"
              target="blank"
            >
              Charte des AMAP
            </a>
          </p>
        </BlocText>
        <img
          src={ProducteurAmapien}
          alt="Nos producteurs AMAPIENS"
          width="450"
          height="411"
        />
        <BlocText>
          <Title1>Ethique de l'AMAP !</Title1>
          <p>
            Une AMAP{" "}
            <strong>
              associe des consommateurs avec des Paysan(nes) locaux
            </strong>{" "}
            dans l’objectif de préserver l’existence et la continuité des fermes
            de proximité dans une logique d’agriculture paysanne.Il s’agit d’une
            agriculture{" "}
            <strong>
              autonome, saine, diversifiée et la plus juste possible.
            </strong>
            Elle doit permettre à des Amapiens d’
            <strong>acheter, à un prix juste</strong>, des produits{" "}
            <strong>d’alimentation de qualité</strong>, en étant informés de
            leur origine et de la façon dont ils ont été produits.
          </p>
        </BlocText>
      </Container>
      <Wrapper>
        <TopWrapper>
          <img src={ArrowLeft} alt="Flèche de direction à gauche" />
          <Title2>Découvrez nos producteurs</Title2>
          <img src={ArrowRight} alt="Flèche de direction à droite" />
        </TopWrapper>
        <ImageContainer>
          <BlocImages>
            <div>
              <span>
                Frédéric Soula - <p>Pommes & Raisins</p>
              </span>
              <img
                src={Pommes}
                alt="Panier de pommes"
                width="270"
                height="180"
              />
            </div>
            <div>
              <span>
                Elisabeth Company - <p>Le champ du Coq</p>
              </span>
              <img
                src={Poules}
                alt="Poulailler en plein air"
                width="396"
                height="180"
              />
            </div>
            <div>
              <span>
                Antoine ESTEBAN - <p>Producteur de légumes BIO</p>
              </span>
              <img
                src={Pommes}
                alt="Une cagette de légumes"
                width="270"
                height="180"
              />
            </div>
            <div>
              <span>
                Malvina MALBEC & Clément Aude - <p>Miel BIO</p>
              </span>
              <img src={Miel} alt="Un pot de miel" width="270" height="180" />
            </div>
            <div>
              <span>
                Julie Saintoul & Romain Vepierre - <p>LA CONQUETE DU PAIN</p>
              </span>
              <img src={Pain} alt="Un pain bio" width="270" height="180" />
            </div>
          </BlocImages>
        </ImageContainer>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
