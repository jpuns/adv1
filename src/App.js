import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatPanel from './ChatPanel.jsx';
import Jordan from './comp/Jordan.js';
import Asat from './comp/Asat.js';

class App extends Component {
    constructor(props){
        super(props);
            
            this.state ={
                noteText:'',
                changePages:false
            }
            this.changeShow = this.changeShow.bind(this);
        
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
        
        <div className="fooder"> 
        <img src={require("./images/house.png")} height="25"/>
        <p>home</p> 
        
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

export default App;
