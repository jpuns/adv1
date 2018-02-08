import React, { Component } from 'react';

import '../App.css';

class Asat extends Component {
    
  render() {
      
    return (
                                         
        <div className="square">
        
            <img src={require("../images/asat.jpg")} height="300"/>
        
        <div id="asat">
            <h3>Asat</h3>
        
        <div id="asatbio">
            <p>Asat is a flexible and experienced sales person with excellent communication skills and proven interpersonal skills. <br/>He is multilingual, able to speak business level English, Mandarin, Japanese and Turkish. Asat worked in the whole sales department at Prices Cruise Line.</p>
        </div> 
        </div> 
        </div>
    );
  }
}

export default Asat;
