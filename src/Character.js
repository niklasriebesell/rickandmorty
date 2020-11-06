/** @format */

import React from "react";
import styled from "styled-components/macro";
const Section = styled.section`
  background-color: #97ce4c;
  display: flex;
  flex-direction: column;

  div img {
    border-radius: 50px;
    display: flex;
    justify-content: center;
  }

  h3 {
    color: #44281d;
    text-align: center;
  }

  li {
    list-style-type: none;
    color: #e89ac7;
    text-align: center;
  }
`;

export default function Character({ name, imgUrl, status, species, gender }) {
  return (
    <Section>
      <h3>{name}</h3>
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <li>{status}</li>
      <li>{species}</li>
      <li>{gender}</li>
    </Section>
  );
}
