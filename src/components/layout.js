import React, { useState, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/styles.css"
import logoAMAP from "../images/AMAP-3.png"
import logoAMAP2 from "../images/AMAP-2.png"
import logoAMAP3 from "../images/AMAP-1.png"
const Layout = ({ children }) => {
  const [isClicked, setIsClicked] = useState(true)
  const menuBurger = useRef()

  const menuClicked = () => {
    setIsClicked(!isClicked)
    if (isClicked) {
      menuBurger.current.style.transform = "translateY(0px)"
      menuBurger.current.style.opacity = 1
    } else {
      menuBurger.current.style.transform = "translateY(-300px)"
      menuBurger.current.style.opacity = 0
    }
  }
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">
            {window.location.pathname === "/" && (
              <img src={logoAMAP} alt="logo de l'AMAP Isle sur la Sorgues" />
            )}
            {window.location.pathname === "/association" && (
              <img src={logoAMAP2} alt="logo de l'AMAP Isle sur la Sorgues" />
            )}
            {window.location.pathname === "/paniers" && (
              <img src={logoAMAP3} alt="logo de l'AMAP Isle sur la Sorgues" />
            )}
            {window.location.pathname === "/producteurs" && (
              <img src={logoAMAP} alt="logo de l'AMAP Isle sur la Sorgues" />
            )}
            {window.location.pathname === "/actualites" && (
              <img src={logoAMAP3} alt="logo de l'AMAP Isle sur la Sorgues" />
            )}
            {window.location.pathname === "/contact" && (
              <img src={logoAMAP2} alt="logo de l'AMAP Isle sur la Sorgues" />
            )}
            {window.location.pathname === "/devenir" && (
              <img src={logoAMAP3} alt="logo de l'AMAP Isle sur la Sorgues" />
            )}
          </Link>
          <ul>
            <li>
              <Link to="/association">L'association</Link>
            </li>
            <li>
              <Link to="/paniers">Les paniers</Link>
            </li>
            <li>
              <Link to="/producteurs">Les producteurs</Link>
            </li>
            <li>
              <Link to="/actualites">Actualités</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/devenir">Devenir membre</Link>
            </li>
          </ul>
          <div
            onClick={() => {
              menuClicked()
            }}
            aria-hidden="true"
          >
            ☰
          </div>
        </Navigation>
      </Header>
      <BurgerMenu ref={menuBurger}>
        <ul>
          <li>
            <Link to="/association">L'association</Link>
          </li>
          <li>
            <Link to="/paniers">Les paniers</Link>
          </li>
          <li>
            <Link to="/producteurs">Les producteurs</Link>
          </li>
          <li>
            <Link to="/actualites">Actualités</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/devenir">Devenir membre</Link>
          </li>
        </ul>
      </BurgerMenu>
      <Main>{children}</Main>
      <Footer>
        <FooterNav>
          <ul>
            <li>
              <Link to="/association">L'association</Link>
            </li>
            <li>
              <Link to="/paniers">Les paniers</Link>
            </li>
            <li>
              <Link to="/producteurs">Les producteurs</Link>
            </li>
            <li>
              <Link to="/actualites">Actualités</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/devenir">Devenir membre</Link>
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
    width: 70%;
  }
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    font-size: 4rem;
    cursor: pointer;
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
    a {
      color: black;
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
  margin-top: 5rem;
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
  flex: 1 0 auto;
`

const BurgerMenu = styled.nav`
  opacity: 0;
  transform: translateY(-300px);
  height: 100px;
  width: 90%;
  margin: auto;
  transition: all 500ms ease;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    li {
      width: 50%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border: 1px solid white;
      background-color: #b3e1c2;
      border-radius: 15px;
    }
  }
`
