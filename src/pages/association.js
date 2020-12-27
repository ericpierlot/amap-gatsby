import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import {
  TopAccroche,
  Title1,
  Title2,
  Btn,
  ImageWave,
  GreenBlock,
} from "../styles/styled"
import DirectCustomer from "../images/direct-customer-02-1024x343.png"
import Rassemblement from "../images/amapien-producteur-association-01-1024x1024.png"

const Container = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
  }
`

const Left = styled.div`
  width: 50%;
  p {
    line-height: 1.8em;
    padding-bottom: 1.8rem;
  }
  @media (max-width: 1100px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 1500px) {
    width: 100%;
  }
  button {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }

  ul {
    list-style-type: circle;
    list-style-position: inside;

    li {
      font-weight: medium;
      line-height: 2rem;
    }
    li:first-child {
      padding-bottom: 1.5rem;
      list-style-type: none;
      :first-child {
        font-weight: bolder;
        text-decoration: underline;
      }
    }
    li:last-child {
      padding-bottom: 1.5rem;
    }
  }
`

const Right = styled.div`
  @media (max-width: 1100px) {
    img {
      width: 90%;
    }
  }
`

const BlocLinear = styled.div`
  margin-top: 7rem;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  background: rgb(179, 225, 194);
  background: linear-gradient(
    139deg,
    rgba(179, 225, 194, 1) 0%,
    rgba(110, 193, 228, 1) 100%
  );
  margin: auto;
  p {
    font-size: 3rem;
    width: 41%;
    margin: auto;
    padding: 1rem;
    text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 1100px) {
      width: 100%;
      margin: auto;
      font-size: 2rem;
    }
  }
`
const BlocGrey = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  ul {
    width: 60%;
    margin: auto;
    li {
      padding-bottom: 1.5rem;
    }
    @media (max-width: 1100px) {
      width: 90%;
    }
  }
  li:first-letter {
    padding-right: 2rem;
  }
`
const AssociationPage = () => {
  return (
    <Layout>
      <SEO title="L'association" />
      <TopAccroche>
        <div>
          <Title1>Manger local & bio</Title1>
          <Title2>Une amap c'est quoi ?</Title2>
          <Btn>Voir les paniers</Btn>
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
        <Left>
          <Title2>Qui sommes-nous ?</Title2>
          <p>
            Comptant une vingtaine d’adhérents à sa création en 2018,{" "}
            <strong>
              l’Association pour le maintien de l’agriculture paysanne de
              l’Isle-sur-la-Sorgue
            </strong>{" "}
            voit le jour grâce à la motivation et l’envie d’un petit groupe de
            consommateur soucieux de faire vivre une{" "}
            <strong>agriculture locale de qualité.</strong>
          </p>
          <p>
            Adhérente au réseau des AMAP, nous soutenons les valeurs suivantes:{" "}
            <strong>l’entraide, la solidarité & le partage.</strong>
          </p>
          <p>
            Propulsé par des personnalités de{" "}
            <strong>l’AMAP de Cavaillon</strong> et appuyé par le Maire de
            l’Isle sur Sorgue, nous avons eu des locaux pour se réunir et
            programmer les distributions.
          </p>
          <p>
            Nous sommes aujourd’hui 50 adhérents et nous sommes tous engagés
            dans le <strong>respect d’une agriculture juste et locale.</strong>
          </p>
          <p>
            Nous militons pour maintenir{" "}
            <strong>l’emploi agricole et les terres nourricières.</strong>
          </p>
          <p>
            Nous <strong>créons du lien</strong>, nous{" "}
            <strong>respectons les saisons</strong>, nous favorisons l’activité
            des producteurs en leur permettant de faire leur{" "}
            <strong>travail plus sereinement.</strong>
          </p>
          <Btn>Voir les paniers !</Btn>
        </Left>
        <Right>
          <img
            src={DirectCustomer}
            alt="Représentation de comment fonctionne l'AMAP"
            width="500"
            height="auto"
          />
        </Right>
      </Container>
      <BlocLinear>
        <p>
          AMAPIENS(NES) & PAYSANS(NES) EN AMAP RESPECTENT ET FONT VIVRE 5
          PRINCIPES FONDAMENTAUX
        </p>
      </BlocLinear>
      <BlocGrey>
        <ul>
          <li>▶ Soutien de l'agriculture paysanne</li>
          <li>
            ▶ Soutien de l'agriculture respectueuse des hommes et de
            l'environnement
          </li>
          <li>▶ Alimentation de qualité et accessible</li>
          <li>▶ Participation à l'éducation populaire</li>
          <li>▶ Relation solidaire sous forme de contrat sans intermédiaire</li>
        </ul>
      </BlocGrey>
      <Container>
        <Right>
          <img
            src={Rassemblement}
            alt="Rassemblement des AMAPIENS"
            width="500"
            height="auto"
          />
        </Right>
        <Left>
          <Title2>Les engagements</Title2>
          <ul>
            <li>Le producteur assure :</li>
            <li>
              La <strong>fourniture des paniers</strong>
            </li>
            <li>
              La <strong>transparence des actes</strong> d’achat, de production,
              de transformation et de vente des produits
            </li>
            <li>
              Le <strong>respect de l’environnement</strong> et le maintien de
              la biodiversité.
            </li>
          </ul>
          <ul>
            <li>Le consommateur assure :</li>
            <li>
              Un <strong>paiement d’avance</strong> pour une partie de la
              production.
            </li>
            <li>
              La <strong>solidarité si aléas</strong> de production.
            </li>
            <li>
              De <strong>mettre en relation</strong> les adhérents et les
              producteurs.
            </li>
            <li>
              <strong>Une permanence minimum</strong> durant l’année
            </li>
          </ul>
          <ul>
            <li>L’association intervient dans :</li>
            <li>
              <strong>L’organisation des relations</strong> entre les
              partenaires et la distribution des produits dans le cadre d’une
              gestion désintéressée.
            </li>
            <li>
              Elle <strong>ne participe pas à l’achat et la vente</strong> des
              denrées.
            </li>
            <li>
              De <strong>créer un lien social</strong> entre adhérents, entre le
              monde urbain et le monde rural.
            </li>
            <li>
              Des <strong>aides ponctuelles vers le maraicher</strong>, (mise en
              place de semis, ramassage, etc…) sur la base du volontariat.
            </li>
          </ul>
        </Left>
      </Container>
      <div style={{ marginTop: "10rem" }}></div>
    </Layout>
  )
}
export default AssociationPage
