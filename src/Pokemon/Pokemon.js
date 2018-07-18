import React, { Component } from 'react';

class Pokemon extends Component {

    render(){
        
        return  (
            <div>
                <img src={this.props.img}/>
                <h1>{this.props.name}</h1>
            </div>
        )
    }

}

export default Pokemon;