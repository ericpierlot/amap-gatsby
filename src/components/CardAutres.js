import React from "react"

import styled from "styled-components"
import { Title1, Btn } from "../styles/styled"
const Card = styled.div`
  margin-bottom: 2rem;
  min-width: 300px;
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
  }
  button {
    text-transform: none;
  }
`
export const CardAutres = ({
  image,
  alt,
  title,
  description,
  formulaire,
  btntxt,
}) => {
  return (
    <Card>
      <img width="128" height="160" src={image} alt={alt} />
      <Title1>{title}</Title1>
      <em>{description}</em>
      <Btn>
        <a href={formulaire} target="blank">
          {btntxt}
        </a>
      </Btn>
    </Card>
  )
}
