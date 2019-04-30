import React from 'react';

//FUNCTIONAL COMPONENT
const colour = ( props ) => {

  let spotColour = ("rgb(" + props.c1 +", "+ props.c2 +", "+ props.c3 +")");

//renders the random colour using passed props  
  const divstyle = {
  backgroundColor: spotColour,
  width: '20vw',
  height: '20vw',
  borderRadius: '100%',
  textAlign: 'center',
  display: 'inline-block'
  };


 return (
    <div style={divstyle}
         onClick={props.clicked}>
    </div>
  );
};

export default colour;
