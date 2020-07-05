import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image4.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image3.jpeg" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <img src={img} width="100%" />
        <h3>basic image</h3>
      </article>
      <article className="single-image">
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h3>fixed image/blur</h3>
      </article>
      <article className="single-image">
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
}

export default Images
