import React, { Component } from 'react';
import Colour from './Colour/Colour';
class ColourContainer extends Component {

//CLASS COMPONENT, WITH STATE :-o

  state = {
   colour1: 138,
   colour2: 131,
   colour3: 198,
   colourCode: 'rgb(138, 131, 198)'
 };


//renders random number
colourCreator = () => {
   return Math.floor(Math.random() * 250) + 1 
}


//renders random number
updateColourHandler = ( event ) => {
  
  let colour1 = this.colourCreator()
  let colour2 = this.colourCreator()
  let colour3 = this.colourCreator()
  
  let colourCode = ("rgb(" + colour1 +", "+ colour2 +", "+ colour3 +")");

  this.setState({
    colour1: colour1,
    colour2: colour2,
    colour3: colour3,
    colourCode: colourCode
  })
}

  render() {
    return (

      <div className="colour-container">
       <h2>{this.state.colourCode}</h2>

        <Colour
          clicked={this.updateColourHandler}
          c1={this.state.colour1.toString()}
          c2={this.state.colour2.toString()}
          c3={this.state.colour3.toString()}
        />
      </div>

    );
  }
}

export default ColourContainer;

