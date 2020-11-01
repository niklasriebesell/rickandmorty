/** @format */

import React from "react";
import styled from "styled-components/macro";
const Section = styled.section`
  color: red;
  background-color: yellow;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 50%;
  }

  h3 {
    color: blue;
    text-align: center;
  }

  li {
  }
`;

export default function Character({ name, imgUrl, status, species, gender }) {
  return (
    <Section>
      <h3>{name}</h3>
      <img src={imgUrl} alt="" />
      <li>{status}</li>
      <li>{species}</li>
      <li>{gender}</li>
    </Section>
  );
}
