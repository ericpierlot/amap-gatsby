import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// Images
import ArrowRight from "../images/fleches-04.png"
import ArrowLeft from "../images/fleches-05.png"
import EcrireAMAP from "../images/amapien-producteur-association-02-1024x1024.png"
import { Spinner } from "../components/Spinner"
import {
  TopAccroche,
  Title1,
  Title2,
  Btn,
  ImageWave,
  Wrapper,
  TopWrapper,
  GreenBlock,
} from "../styles/styled"

const Bloc = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  p {
    text-align: left;
    padding-bottom: 1rem;
    line-height: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 0.2rem;
    }
    input {
      margin-bottom: 2rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ddd;
      outline: none;
      border-radius: 5px;
      &:focus {
        border: 1px solid #999999;
      }
    }

    textarea {
      margin-bottom: 2rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ddd;
      outline: none;
      border-radius: 5px;
      &:focus {
        border: 1px solid #999999;
      }
    }

    div {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  margin-bottom: 3rem;

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

const Container2 = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  margin-top: 3rem;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 90%;
    iframe {
      width: 100%;
    }
  }
  @media (max-width: 1500px) {
    width: 90%;
  }
`

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    objet: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [completedMessage, setCompletedMessage] = useState("")

  const contactFormulaire = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    })
  }

  const sendForm = e => {
    e.preventDefault()
    if (
      contact.name === "" ||
      contact.email === "" ||
      contact.objet === "" ||
      contact.message === ""
    )
      return setCompletedMessage("Veuillez remplir tous les champs")
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setCompletedMessage("Nous avons bien reçu votre message !")
    }, 3000)
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <TopAccroche>
        <div>
          <Title1>Je veux en savoir plus sur</Title1>
          <Title2>L'AMAP DE L'ISLE-SUR-LA-SORGUE</Title2>
          <Btn onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
            Nous écrire
          </Btn>
        </div>
      </TopAccroche>
      <ImageWave></ImageWave>
      <GreenBlock
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TopWrapper style={{ justifyContent: "space-around" }}>
          <img src={ArrowLeft} alt="Flèche de direction à gauche" />
          <Title2 style={{ color: "white" }}>Nous trouver</Title2>
          <img src={ArrowRight} alt="Flèche de direction à droite" />
        </TopWrapper>
      </GreenBlock>
      <Container2>
        <Bloc>
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
        <Bloc>
          <iframe
            width="600"
            height="500"
            title="Carte de l'association pour nous contacter"
            src="https://maps.google.com/maps?q=437%20Avenue%20Napol%C3%A9on%20Bonaparte&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
            style={{ border: "1px solid black" }}
          />
        </Bloc>
      </Container2>
      <Wrapper>
        <TopWrapper style={{ justifyContent: "space-around" }}>
          <img src={ArrowLeft} alt="Flèche de direction à gauche" />
          <Title2>Nous écrire</Title2>
          <img src={ArrowRight} alt="Flèche de direction à droite" />
        </TopWrapper>
      </Wrapper>
      <Container2>
        <Bloc>
          <Title1>Contactez-nous !</Title1>

          <form onSubmit={sendForm}>
            <label htmlFor="name">Votre nom (obligatoire)</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={contactFormulaire}
            />
            <label htmlFor="email">
              Votre adresse de messagerie (obligatoire)
            </label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={contactFormulaire}
            />
            <label htmlFor="objet">Objet</label>
            <input
              type="text"
              name="objet"
              value={contact.objet}
              onChange={contactFormulaire}
            />
            <label htmlFor="message">Votre message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={contact.message}
              onChange={contactFormulaire}
            ></textarea>
            <div>{isLoading ? <Spinner /> : completedMessage}</div>
            <Btn>Envoyer</Btn>
          </form>
        </Bloc>
        <Bloc>
          <img src={EcrireAMAP} alt="Nous écrire" />
        </Bloc>
      </Container2>
    </Layout>
  )
}

export default Contact
