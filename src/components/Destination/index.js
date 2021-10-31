import React from "react"
import styled from "styled-components"
import bg from "../../images/background.jpg"

const HeroSection = styled.section`
  background: url(${bg}) center center/cover no-repeat;
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

  @media screen and (max-width: 960px) {
    h1 {
      font-size: 70px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 60px;
    }
  }
`

const index = () => {
  return (
    <HeroSection>
      <h1>Destination</h1>
    </HeroSection>
  )
}

export default index
