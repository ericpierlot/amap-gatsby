import React from "react"
import styled from "styled-components"
import Beignet from "../../../images/beignets-fleur-courgette-683x1024.jpg"

const Card = styled.div`
  height: 600px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 330ms ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }
  &:hover > div {
    box-shadow: none;
  }
`
const TopCard = styled.div`
  position: relative;
  background-size: cover;
  background-position: 25% 45%;
  background-repeat: no-repeat;
  height: 220px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: inset 0px -60px 50px rgba(0, 0, 0, 0.2);
  transition: all 330ms ease;

  div {
    background-color: #61ce70;
    position: absolute;
    top: 20px;
    right: 30px;
    padding: 0.4rem 0.8rem;
    border-radius: 30px;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    letter-spacing: -0.02rem;
  }
`
const ContentCard = styled.div`
  color: #5c5c5c;
  h2 {
    padding-bottom: 2rem;
  }
  padding: 0rem 2rem;
  p {
    padding-bottom: 2rem;
  }
  span {
    color: #61ce70;
  }
`
const BottomCard = styled.div`
  border-top: 1px solid #ddd;
  color: #ddd;
  padding: 0.5rem 2rem;
  font-size: 0.8rem;
`

const CardArticle = () => {
  return (
    <Card>
      <TopCard style={{ backgroundImage: `url(${Beignet})` }}>
        <div style={{ backgroundColor: `` }}>Recette Chouette</div>
      </TopCard>
      <ContentCard>
        <h2>Beignets de fleurs de courgette</h2>
        <p>
          Beignets de fleurs de courgette Fiche infos Origine Originaire de
          Méditerranée et plus précisément de la région du pays niçois, ce met
          délicieux
        </p>
        <span>Lire plus</span>
      </ContentCard>
      <BottomCard>
        <p>Date</p>
      </BottomCard>
    </Card>
  )
}

export default CardArticle
