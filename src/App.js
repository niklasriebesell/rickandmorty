/** @format */

import { useEffect, useState } from "react";
import Character from "./Character";
import getCharacters from "./services/getCharacters";
import styled from "styled-components/macro";
function App() {
  // const [state, setState] = useState(initialState)
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      {/* {characters.map((character) =>
      <Character status={character.status} 
      key={character.id} name={character.name} 
      imgUrl={character.image} />)} */}
      {characters
        .filter((character) => character.status === "Alive")
        .map(({ status, name, id, image, species, gender }) => (
          <Character
            status={status}
            key={id}
            name={name}
            imgUrl={image}
            species={species}
            gender={gender}
          />
        ))}
    </div>
  );
}
export default App;
