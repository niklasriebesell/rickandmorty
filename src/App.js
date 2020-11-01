/** @format */

import { useEffect, useState } from "react";
import Character from "./Character";
import getCharacters from "./services/getCharacters";
import styled from "styled-components/macro";
/*import Button from "./Button"; */

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
          /*episode,
            origin,
            location,*/
          <Character
            status={status}
            key={id}
            name={name}
            imgUrl={image}
            species={species}
            gender={gender}

            /*episode={[1, 2, 3, 4, 5]}
              origin={{
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/20",
              }}
              location={{
                name: "Earth",
                url: "https://rickandmortyapi.com/api/location/20",
              }}*/
          />
        ))}
    </div>
  );
}
export default App;
