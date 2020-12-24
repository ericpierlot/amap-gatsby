import styled from "styled-components"
import GreenWave from "../../images/acc.png"

export const TopAccroche = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: auto;
  div {
    width: 50%;
    @media (max-width: 1100px) {
      width: 80%;
      text-align: center;
    }
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`
export const Title1 = styled.h2`
  font-family: "olivier", sans-serif;
  font-size: 2rem;
  color: #54595f;
  padding-bottom: 1rem;
`
export const Title2 = styled.h2`
  font-family: "Geometos", sans-serif;
  font-size: 2.2rem;
  text-transform: uppercase;
  color: #b3e1c2;
  padding-bottom: 1rem;
`
export const Btn = styled.button`
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  outline: none;
  border-radius: 30px;
  color: white;
  background-color: #5c026a;
  cursor: pointer;
  transition: background-color 330ms ease;
  :hover {
    background-color: #846adc;
  }
`
export const ImageWave = styled.div`
  margin-top: 3rem;
  background-image: url(${GreenWave});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  @media (max-width: 1100px) {
    margin-top: 0;
  }
`

export const GreenBlock = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  color: white;
  font-family: "gotham bold", sans-serif;
  text-transform: uppercase;
  background-color: #abd8bb;
  transform: translateY(-1px);
  @media (max-width: 1100px) {
    height: 250px;
  }
  p {
    font-size: 1.2rem;
    width: 40%;
    margin: auto;
    :first-child {
      padding-top: 2rem;
    }
    @media (max-width: 1100px) {
      width: 90%;
    }
  }
`

export const Container = styled.div`
  padding-top: 7rem;
  width: 60%;
  margin: auto;
  display: flex;
  img {
    width: 33.33%;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    img {
      padding: 2rem 0;
      width: 80%;
    }
  }
  @media (max-width: 1500px) {
    width: 90%;
  }
`

export const BlocText = styled.div`
  width: 33.33%;
  text-align: center;
  p {
    font-family: "RobotoLight", sans-serif;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
  a {
    font-weight: bold;
    color: black;
    transition: color 330ms ease;
    &:hover {
      color: #6ec1e4;
    }
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 1500px) {
    width: 90%;
  }
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  img {
    margin: 0 2rem;
    width: 8%;
  }
  margin-bottom: 1rem;
  @media (max-width: 1100px) {
    text-align: center;
    img {
      display: none;
    }
  }
`
