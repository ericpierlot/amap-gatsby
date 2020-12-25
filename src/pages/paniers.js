import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title1, Title2, Btn } from "../styles/styled"
import { CardAutres } from "../components/CardAutres"
import styled from "styled-components"

//IMAGES
import Oeuf from "../images/egg.png"
import Poule from "../images/chicken-1.png"
import Pain from "../images/loaf.png"
import Miel from "../images/honey.png"
import Pomme from "../images/apple-1.png"
import Raisin from "../images/grapes-1.png"
import Fromage from "../images/picto-chevrefromage_Plan-de-travail-1.jpg"

const Container = styled.section`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;

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

const Bloc = styled.div`
  min-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    text-align: center;
  }
  ul {
    text-align: left;
    list-style-type: circle;
    list-style-position: inside;
    padding-bottom: 1rem;

    li {
      padding-bottom: 0.5rem;
      font-weight: 700;
      line-height: 1.5rem;
    }
  }
  em {
    text-align: left;
    margin-bottom: 3rem;
  }

  p {
    text-align: left;
    padding-bottom: 1rem;
  }

  margin-bottom: 7rem;
`

const Separation = styled.div`
  width: 60%;
  margin: auto;
  border-top: 1px solid black;
  text-align: center;
  padding: 2rem 0;
`

const ContainerAutres = styled.section`
  width: 60%;
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
  margin-bottom: 5rem;
`

const PaniersPage = () => (
  <Layout>
    <SEO title="Les paniers" />
    <Container>
      <Bloc>
        <Title1>Le petit panier</Title1>
        <p style={{ textAlign: "center" }}>Légumes BIO de saison</p>
        <Title2 style={{ fontSize: "1.5rem", margin: "2rem 0" }}>
          9.50€ / semaine
        </Title2>
        <ul>
          <li>Panier pour 2 personnes</li>
          <li>Approvisionnement hebdomadaire d’un panier de légumes</li>
          <li>Agriculture Biologique</li>
          <li>
            Règlement à la signature du contrat sous forme d'un ou plusieurs
            chèques
          </li>
          <li>Adhésion à l'association obligatoire</li>
          <li>Distribution durant 48 semaines</li>
        </ul>
        <em>
          Le producteur se réserve un 4 semaines de non distribution pour les
          congés définies en début de saison
        </em>
        <Btn>Adhérer à ce contrat</Btn>
      </Bloc>
      <Bloc>
        <Title1>Le grand panier</Title1>
        <p style={{ textAlign: "center" }}>Légumes BIO de saison</p>
        <Title2 style={{ fontSize: "1.5rem", margin: "2rem 0" }}>
          13.50€ / semaine
        </Title2>
        <ul>
          <li>Panier pour 4 personnes</li>
          <li>Approvisionnement hebdomadaire d’un panier de légumes</li>
          <li>Agriculture Biologique</li>
          <li>
            Règlement à la signature du contrat sous forme d'un ou plusieurs
            chèques
          </li>
          <li>Adhésion à l'association obligatoire</li>
          <li>Distribution durant 48 semaines</li>
        </ul>
        <em>
          Le producteur se réserve un 4 semaines de non distribution pour les
          congés définies en début de saison
        </em>
        <Btn>Adhérer à ce contrat</Btn>
      </Bloc>
    </Container>
    <Separation>
      <Title2>Les autres contrats</Title2>
    </Separation>
    <ContainerAutres>
      <CardAutres
        image={Oeuf}
        alt="Un Oeuf"
        title="Oeuf"
        description="Non calibrés de plus de 50g"
        formulaire="https://www.amap-islesursorgue.fr/aptymemo/2020/02/contrat-oeufsBio-2020_2021-AMAP-islesurlasorgue.pdf"
        btntxt="Télécharger ce formulaire"
      />
      <CardAutres
        image={Poule}
        alt="Une poule"
        title="Volaille"
        description="Poulets & Pintades"
        formulaire="https://www.amap-islesursorgue.fr/aptymemo/2020/03/contrat-volaille-2020_2021-AMAP-islesurlasorgue.pdf"
        btntxt="Télécharger ce formulaire"
      />
      <CardAutres
        image={Pain}
        alt="un pain"
        title="Pain"
        description="Pains spéciaux"
        formulaire="https://www.amap-islesursorgue.fr/aptymemo/2020/05/contrat-pain-2020_2021-AMAP-islesurlasorgue.pdf"
        btntxt="Télécharger ce formulaire"
      />
      <CardAutres
        image={Miel}
        alt="Un pot de miel"
        title="Miel"
        description="Variétés de miel & Lavande"
        formulaire="https://www.amap-islesursorgue.fr/contact/"
        btntxt="Contacter l'association"
      />
      <CardAutres
        image={Pomme}
        alt="Une pomme"
        title="Pomme"
        description="Variété de pomme Bio"
        formulaire="https://www.amap-islesursorgue.fr/contact/"
        btntxt="Contacter l'association"
      />
      <CardAutres
        image={Raisin}
        alt="Une grappe de raisin"
        title="Raisin"
        description="Variété de raisin"
        formulaire="https://www.amap-islesursorgue.fr/contact/"
        btntxt="Contacter l'association"
      />
      <CardAutres
        image={Fromage}
        alt="Fromage de chèvre"
        title="Fromage"
        description="Fromage de chèvre"
        formulaire="https://www.amap-islesursorgue.fr/aptymemo/2020/03/contrat-FROMAGE-2020_2021-AMAP-islesurlasorgue.pdf"
        btntxt="Télécharger ce formulaire"
      />
    </ContainerAutres>
    <Container>
      <Bloc>
        <Title2 style={{ marginBottom: "2rem" }}>
          Où récupérer son panier ?
        </Title2>
        <p>
          Tous <strong>les jeudis soir entre 18h00 et 19h00</strong>, venez
          récupérer votre petit ou grand panier rempli de{" "}
          <strong>légumes BIO et locaux.</strong> Vous pouvez également
          récupérer selon vos commandes et les saisons des d’œufs, du poulet,
          des pommes, du pains, du miels…
        </p>
        <p>Le lieu de distribution est toujours identique :</p>
        <p>
          Centre social La Cigalette – 437 Avenue Napoléon Bonaparte{" "}
          <strong>84800 Isle-sur-la-Sorgue</strong>
        </p>
      </Bloc>
      <Bloc></Bloc>
    </Container>
  </Layout>
)

export default PaniersPage
