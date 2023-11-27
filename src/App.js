import  React, { useState } from "react";
import Button from "./component/Button";

function App() {

  function testando(){
    return (console.log('teste de componente'))
  }

  return (
    <div className="App">
      <Button onClick={testando} label="Novo Ensinamento" />
    </div>
  );
}

export default App;
