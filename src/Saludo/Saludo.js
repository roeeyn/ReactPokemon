import React, { Component } from 'react';

class Saludo extends Component {

    render(){
        
        return this.getNombres()
    }

    getNombres(){

        let lista = [{
            nombre:"Rodrigo",
            edad:23
        },{
            nombre:"Luis",
            edad:24
        },{
            nombre:"Yos",
            edad:25
        }];
        return lista.map((persona)=>{

            return <h1>{persona.nombre} tiene {persona.edad} años!</h1>

        });

    }

}

export default Saludo;