import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const GridContainer = styled.div`
  text-align: center;
  margin: 150px 0;

  h1 {
    margin-bottom: 64px;
  }
`
const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 32px;
  width: 100%;

  .img-item:nth-child(5) {
    grid-column-end: span 2;
  }
  .img-item:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }

  .img-item:hover {
    transform: scale(1.05);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background", "background2"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <GridContainer>
      <h1>View our Destinations</h1>
      <Grid>
        {data.allFile.edges.map((image, key) => {
          return (
            <Img
              key={key}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
              className="img-item"
            />
          )
        })}
      </Grid>
    </GridContainer>
  )
}

export default Image
