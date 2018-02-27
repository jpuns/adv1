import React, { Component } from 'react';
import '../App.css';
import ChatPanel from '../ChatPanel.jsx';
import Jordan from './Jordan.js';
import Asat from './Asat.js';

class Landing extends Component {
    constructor(props){
        super(props);
            
            this.state ={
                noteText:'',
                changePages:false
            }
            this.playGame = this.playGame.bind(this);
        
    }
     updateNoteText(noteText){ 
         this.setState({noteText: noteText.targer.value})
     }
    
    handleKeyPress = (event)=> {
        
        if (event.key === 'Enter'){
            
        }
    }
    
    changeShow(bool){
        var arg = bool;
        this.setState({
            changePages:arg})
        }
   playGame(){
       this.props.changeShow(2);
   }
    
  render() {
      var bio = null;
      var bio2 = null;
      
        
            bio = (
            <Jordan/>
            )
            bio2 = (
            <Asat/>
            )
            
        
        
    return (
    
     <div className="container">
        <div className="header"> The Digital Agency. </div>
        
        <div onClick={this.playGame} className="fooder"> 
        <img id="homebut" src={require("../images/house.png")} height="35"/>
        <button id="playbut">PLAY STICKERS</button> 
        
        </div>
        <div className="btn"> Come and join us</div>
        
        
         
         {bio2}
        
            {bio}
            
            
            
           
            
            <div>
            <ChatPanel/>
            
            </div>
        </div>
      
    );
  }
}

export default Landing;
