import React, { Component } from 'react';
import logo from './logo.svg';
import Perro from './Perro/Perro'
import Boton from './boton/Boton'
import Saludo from './Saludo/Saludo'
import Pokemones from './Pokemones/Pokemones'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Perro/>
        <Boton/>
        <Saludo saludo="Hola"/>
        <Pokemones />
     
      </div>
    );
      // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Hola desde cosa ruda'))
  }
}

export default App;
