import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function BeersPage({ data }) {
  return (
    <>
      <SEO title={`Beers! We have ${data.allBeer.nodes.length} in Stock!`} />
      <h2 className="center">
        We have ${data.allBeer.nodes.length} available. Dine in Only!
      </h2>
      <BeerGridStyles>
        {data.allBeer.nodes.map((beer) => (
          <SingleBeerStyles key={beer.id}>
            <img src={beer.image} alt={beer.name} />
            <h3>{beer.name}</h3>
            {beer.price}
          </SingleBeerStyles>
        ))}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query allBeers {
    allBeer {
      nodes {
        name
        price
        image
        id
      }
    }
  }
`;
