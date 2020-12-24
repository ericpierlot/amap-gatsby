import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/styles.css"
import logoAMAP from "../images/AMAP-3.png"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const logo = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "AMAP-3.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">
            <Img
              fixed={logo.file.childImageSharp.fixed}
              alt="Logo du site web"
            />
          </Link>
          <ul>
            <li>
              <Link to="/association">L'association</Link>
            </li>
            <li>
              <Link to="/">Les paniers</Link>
            </li>
            <li>
              <Link to="/">Les producteurs</Link>
            </li>
            <li>
              <Link to="/">Actualités</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Devenir membre</Link>
            </li>
          </ul>
          <div>MENU BURGER</div>
        </Navigation>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterNav>
          <ul>
            <li>
              <Link to="/">L'association</Link>
            </li>
            <li>
              <Link to="/">Les paniers</Link>
            </li>
            <li>
              <Link to="/">Les producteurs</Link>
            </li>
            <li>
              <Link to="/">Actualités</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Devenir membre</Link>
            </li>
          </ul>
        </FooterNav>
      </Footer>
    </>
  )
}

export default Layout

const Header = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: auto;
`

const Navigation = styled.nav`
  padding-top: 1rem;
  img {
    width: 220px;
  }
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
  }
  ul {
    display: none;
  }
  li {
    display: inline-block;
    font-size: 0.7rem;
    letter-spacing: 0.02rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  @media (min-width: 1100px) {
    width: 80%;
    ul {
      width: 60%;
      display: flex;
      justify-content: space-between;
    }
    div {
      display: none;
    }
  }
  @media (min-width: 1500px) {
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      width: 70%;
      display: flex;
      justify-content: space-between;
    }
    div {
      display: none;
    }
  }
`
const FooterNav = styled.nav`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    font-size: 0.9rem;
    letter-spacing: 0.02rem;
    font-weight: bold;
    &:last-child {
      text-transform: uppercase;
    }
  }
  @media (max-width: 1100px) {
    width: 10%;
    ul {
      display: none;
    }
  }
  @media (max-width: 1500px) {
    width: 90%;
  }
`
const Footer = styled.footer`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding-bottom: 0.2rem;
    border-color: transparent;
    transition: border-color 0.5s ease;
    &:hover {
      border-bottom: 2px #33a733 solid;
    }
  }
  padding-bottom: 1rem;
  @media (max-width: 1100px) {
    width: 90%;
  }
`

const Main = styled.main`
  margin-top: 5rem;
  min-height: 100vh;
`
