import React from 'react';
/*import logo from './logo.svg'; */
import './App.css';
import {characters} from './components/characters.js'
import {CharacterCard} from './components/characterCard.js'
import {Selection} from './components/selection.js'

class App extends React.Component {
  constructor(props){
    super(props);
    const current = "Homer";
    this.state = { 
      name: current,
      photo: characters[current].photo,
      age: characters[current].age,
      food: characters[current].food,
      catchphrase: characters[current].catchphrases[1]
    }
    this.chooseCharacter = this.chooseCharacter.bind(this)
  }

  chooseCharacter(newCharacter){
    this.setState({
      name: newCharacter,
      photo: characters[newCharacter].photo,
      age: characters[newCharacter].age,
      food: characters[newCharacter].food,
      catchphrase: characters[newCharacter].catchphrases[1]
    })
  } 

  render () {
    return (
    <div> 
    <Selection chooseCharacter={this.chooseCharacter} />
    <CharacterCard 
    photo={this.state.photo}
    name={this.state.name}
    age={this.state.age}
    food={this.state.food}
    catchphrases={this.state.catchphrase}
    />
    </div>
    )
  }
};


export default App; 


