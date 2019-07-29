import React from 'react';

export class Selection extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const text = e.target.value;
        this.props.chooseCharacter(text);
    }

    render(){
        return (
     <form onClick={this.handleClick}>
         <input type="radio" name="select" value="Homer"/>Homer
         <input type="radio" name="select" value="Marge"/>Marge
     </form>   
        )
    }
};