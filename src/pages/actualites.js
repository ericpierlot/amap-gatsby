import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CardArticle from "../components/articles/component/CardArticle"

const ConteneurCategorie = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5rem;
`
const Categorie = styled.button`
  cursor: pointer;
  height: 50px;
  padding: 0 1.2rem;
  background-color: white;
  border-radius: 5px;
  outline: none;
  transition: all 330ms ease;
  font-weight: bold;
  &:nth-child(1) {
    border: 1px solid black;
    color: black;
  }
  &:nth-child(2) {
    border: 1px solid orange;
    color: orange;
  }
  &:nth-child(3) {
    border: 1px solid red;
    color: red;
  }
  &:nth-child(4) {
    border: 1px solid #61ce70;
    color: #61ce70;
  }
  &:hover {
    border: 1px solid #7a7a7a;
    color: #7a7a7a;
  }
`

const ConteneurCard = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
const ActualitesPage = () => {
  return (
    <Layout>
      <SEO title="Actualités" />
      <ConteneurCategorie>
        <Categorie>Tous les articles</Categorie>
        <Categorie>Les Producteurs sympas</Categorie>
        <Categorie>Evénements réjouissants</Categorie>
        <Categorie>Recette chouettes</Categorie>
      </ConteneurCategorie>
      <ConteneurCard>
        <CardArticle />
      </ConteneurCard>
    </Layout>
  )
}
export default ActualitesPage
