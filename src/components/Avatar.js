import Img from 'gatsby-image';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar-circle.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
};

export default Avatar;
