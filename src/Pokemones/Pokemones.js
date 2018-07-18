import React, { Component } from 'react';
import Pokemon from '../Pokemon/Pokemon'
class Pokemones extends Component {

    render(){
        
        return  this.getPokemons()
    }

    getPokemons(){

        // TODO traer pokemons
        let lista  = [{
            name:"Pikachu",
            img:"https://vignette.wikia.nocookie.net/es.pokemon/images/5/5e/Pikachu_con_gorra_USUL.jpg/revision/latest?cb=20171102093953"
        },
        {
            name:"Bulbasaur",
            img:"https://vignette.wikia.nocookie.net/es.pokemon/images/5/5e/Pikachu_con_gorra_USUL.jpg/revision/latest?cb=20171102093953"
        },{
            name:"Squirtle",
            img:"https://vignette.wikia.nocookie.net/es.pokemon/images/5/5e/Pikachu_con_gorra_USUL.jpg/revision/latest?cb=20171102093953"
        }]

        return lista.map((pokemon)=>{
            return <Pokemon name={pokemon.name} img={pokemon.img}/>
        });

    }

}

export default Pokemones;