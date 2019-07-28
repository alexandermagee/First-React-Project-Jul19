import React from 'react';
/*import logo from './logo.svg'; */
import './App.css';
import {characters} from './components/characters.js'
import {CharacterCard} from './components/characterCard.js'

class App extends React.Component {
  constructor(props){
    super(props);
    const current = "Marge";
    this.state = { 
      name: current,
      photo: characters[current].photo,
      age: characters[current].age,
      food: characters[current].food
    }
  }
  render () {
    return (
    <div> 
    <CharacterCard 
    photo={this.state.photo}
    name={this.state.name}
    age={this.state.age}
    food={this.state.food}
    />
    </div>
    )
  }
};






export default App; 


