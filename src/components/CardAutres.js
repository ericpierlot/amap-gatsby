import React from "react"

import styled from "styled-components"
import { Title1, Btn } from "../styles/styled"
const Card = styled.div`
  margin-bottom: 2rem;
  width: 300px;
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    padding: 1rem 0;
  }
  a {
    color: white;
  }

  em {
    padding-bottom: 3rem;
    text-align: center;
  }
  button {
    text-transform: none;
  }

  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
  p {
    text-align: center;
  }
`
export const CardAutres = ({
  image,
  alt,
  title = "",
  title2 = "",
  metier = "",
  description = "",
  formulaire = "",
  btntxt = null,
}) => {
  return (
    <Card>
      <img width="128" height="160" src={image} alt={alt} />
      <Title1>{title}</Title1>
      {title2 && <h2>{title2}</h2>}
      {metier && <em>{metier}</em>}
      <em>{description}</em>
      {btntxt && (
        <Btn>
          <a href={formulaire} target="blank">
            {btntxt}
          </a>
        </Btn>
      )}
    </Card>
  )
}
