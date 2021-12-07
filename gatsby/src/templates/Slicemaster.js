import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

function Slicemaster({ data: { slicemaster } }) {
  return (
    <>
      <SEO
        title={slicemaster.name}
        image={slicemaster.image?.asset?.fluid?.src}
      />
      <div className="center">
        <h2>
          <span className="mark">{slicemaster.name}</span>
        </h2>
        <Img fluid={slicemaster.image.asset.fluid} />
        <p>{slicemaster.description}</p>
      </div>
    </>
  );
}

export default Slicemaster;

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
    }
  }
`;
