import React from "react"
import styled from "styled-components"
import hero from "../../images/hero.jpg"
import { ButtonElements } from "../ButtonElements"

const HeroSection = styled.section`
  background: url(${hero}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;

  h1 {
    color: #fff;
    font-size: 100px;
    margin-top: 0px;
  }

  p {
    color: #fff;
    font-size: 32px;
    margin-top: 8px;
  }

  @media screen and (max-width: 960px) {
    h1 {
      font-size: 70px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 30px;
    }
  }
`
const ButtonContainer = styled.div`
  button {
    margin-top: 1.5rem;
  }
`

const index = () => {
  return (
    <HeroSection>
      <h1>Travel More</h1>
      <p>Plan your next trip today</p>
      <ButtonContainer>
        <ButtonElements fontBig big primary>
          Get Started
        </ButtonElements>
      </ButtonContainer>
    </HeroSection>
  )
}

export default index
