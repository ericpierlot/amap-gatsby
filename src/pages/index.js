import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
// Images
import ProdAmapien from "../images/PRODUCTEUR-AMAPIEN-02-1024x922.jpg"
import ArrowRight from "../images/fleches-04.png"
import ArrowLeft from "../images/fleches-05.png"
import Pommes from "../images/pommes2000px-1024x682.jpg"
import Chicken from "../images/AdobeStock_220277518-1024x465.jpeg"
import Honeypot from "../images/POT-DE-MIEL2000px-1024x682.jpg"
import Bread from "../images/PAIN-BIO-COMPLET-scaled-1-1024x576.jpeg"
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

const ImageBlock = styled.div`
  width: 100%;
  display: flex;
  height: 200px;
  @media (max-width: 1100px) {
    flex-direction: column;
    width: 90%;
    height: 1000px;
    justify-content: center;
    align-items: center;
  }
  div {
    position: relative;
    width: 20%;
    height: 100%;
    transition: background-color 330ms linear;
    @media (max-width: 1100px) {
      width: 100%;
    }
    span {
      display: none;
    }
    &:hover {
      background-color: #846adc;
      cursor: pointer;
      span {
        padding: 1rem;
        width: 100%;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    position: absolute;
  }

  margin-bottom: 5rem;
`
const IndexPage = () => (
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
          l’avance la commercialisation de ses produits et à l’Amapien d’obtenir
          un panier des <strong>produits de la ferme.</strong>
        </p>
        <p
          style={{
            paddingTop: "1.5rem",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          <Link to="https://www.amap-islesursorgue.fr/aptymemo/2019/09/Charte_des_AMAP.pdf">
            Charte des AMAP
          </Link>
        </p>
      </BlocText>
      <img src={ProdAmapien} alt="Producteur Amapien" />
      <BlocText>
        <Title1>Ethique de l'AMAP !</Title1>
        <p>
          Une AMAP{" "}
          <strong>associe des consommateurs avec des Paysan(nes) locaux</strong>{" "}
          dans l’objectif de préserver l’existence et la continuité des fermes
          de proximité dans une logique d’agriculture paysanne.Il s’agit d’une
          agriculture{" "}
          <strong>
            autonome, saine, diversifiée et la plus juste possible.
          </strong>
          Elle doit permettre à des Amapiens d’
          <strong>acheter, à un prix juste</strong>, des produits{" "}
          <strong>d’alimentation de qualité</strong>, en étant informés de leur
          origine et de la façon dont ils ont été produits.
        </p>
      </BlocText>
    </Container>
    <Wrapper>
      <TopWrapper>
        <img src={ArrowLeft} alt="présentation des producteurs" />
        <Title2>Découvrez nos producteurs</Title2>
        <img src={ArrowRight} alt="Présentation de nos producteurs" />
      </TopWrapper>
      <ImageBlock>
        <div>
          <span>
            Frédéric Soula - <p>Pommes & Raisins</p>
          </span>
          <img src={Pommes} alt="Pommes" />
        </div>
        <div>
          <span>
            Elisabeth Company - <p>Le champ du Coq</p>
          </span>
          <img src={Chicken} alt="Poules en plen air" />
        </div>
        <div>
          <span>
            Antoine ESTEBAN - <p>Producteur de légumes BIO</p>
          </span>
          <img src={Honeypot} alt="Du miel frais" />
        </div>
        <div>
          <span>
            Malvina MALBEC & Clément Aude - <p>Miel BIO</p>
          </span>
          <img src={Bread} alt="Du pain 100% bio" />
        </div>
        <div>
          <span>
            Julie Saintoul & Romain Vepierre - <p>LA CONQUETE DU PAIN</p>
          </span>
          <img src={Honeypot} alt="Un jolie pot de miel" />
        </div>
      </ImageBlock>
    </Wrapper>
  </Layout>
)

export default IndexPage
