import React, { useState } from "react";
import Button from "../Button";

function Phrases() {
    const [state, setState] = useState('Sou Osho, seja bem-vindo aos meus ensimanentos!');
    const [label, setLabel] = useState("Iniciar");
  
    function changePhrase(){
        setLabel("Novo Ensinamento");
        let url = './data.json'
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            let random = Math.floor(Math.random() * json.data.length);
            setState(json.data[random].phrase);
        })
    };
    return (
      <div className="container">
        <div className="items">
          <p>"{state}"</p>
          <Button
              onClick={changePhrase}
              label={label}
              className="btn btn-medium btn-change"
          />
        </div>
      </div>
    );
}

export default Phrases;