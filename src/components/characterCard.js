import React from 'react';

export class CharacterCard extends React.Component {
    render() {
      return (
        <div>
      <img 
      src={this.props.photo} 
      className = {this.props.className}
      alt="character"
      ></img>
      <h1>Name: {this.props.name}</h1>
      <h2>Age: {this.props.age}</h2>
      <h2>Food: {this.props.food}</h2>
      <h3>Catchphrases: {this.props.catchphrases}</h3>
      </div>
      )
    } 
  ;}

  