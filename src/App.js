import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatPanel from './ChatPanel.jsx';

class App extends Component {
    constructor(props){
        super(props);
            
            this.state ={
                noteText:'',
            }
        
    }
     updateNoteText(noteText){ 
         this.setState({noteText: noteText.targer.value})
     }
    
    handleKeyPress = (event)=> {
        
        if (event.key === 'Enter'){
            
        }
    }
    
  render() {
    return (
        
     <div className="container">
        <div className="header"> The Digital Agency. </div>
        
        <div className="fooder"> 
        <img src={require("./images/house.png")} height="25"/>
        <p>home</p> 
        
        </div>
        <div className="btn"> Come and join us</div>
        <div className="square"><img src={require("./images/asat.jpg")} height="300"/>
        <div id="asat">
        <h3>Asat</h3>
        <div id="asatbio">
        <p>Asat is a flexible and experienced sales person with excellent communication skills and proven interpersonal skills. <br/>He is multilingual, able to speak business level English, Mandarin, Japanese and Turkish. Asat worked in the whole sales department at Prices Cruise Line.</p>
        </div> 
        </div> 
                                          
         </div>                                  
        <div className="square2"><div className="pp"><img src={require("./images/puns.png")} height="300"/>
            
               <div id="jordan">
                    <h3>Jordan</h3>
                   </div>
               
              <div id="jordanbio">
        <p>Jordan is the newest member of BCITease. He is a tenacious learner that offers the company a dynamic range of skills. After completing Business Comm 1 at BCIT, he decided to pursue a career in Sales.<br/> Jordan’s ability to communicate with partners and clients make him an important member of the team.</p></div>
            
            
            
            </div></div>
            
            <div>
            <ChatPanel/>
            </div>
        </div>
      
    );
  }
}

export default App;
