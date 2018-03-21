import React, { Component } from 'react';
import './App.css';
import Landing from './comp/Landing.js';
import Stickers from './comp/sticker/Stickers.js';
import About from './comp/About.js';
import ChatPanel from './ChatPanel.jsx';
import Test from './comp/sticker/comp/Test.js';
import Rooms from './comp/sticker/comp/Rooms.js';
import Game from './comp/game/Game.js';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteText:'',
            changePages: 0,
        }
        this.changeShow = this.changeShow.bind(this);
        this.home = this.home.bind(this);
        this.custom = this.custom.bind(this);
        this.game1 = this.game1.bind(this);
        this.game2 = this.game2.bind(this);
        this.about = this.about.bind(this);
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
        this.setState({changePages:arg})
    }
    home(){
        this.setState({changePages:0})
    }
    custom(){
        this.setState({changePages:2})
    }
    game1(){
        this.setState({changePages:3})
    }
    game2(){
        this.setState({changePages:4})
    }
    about(){
        this.setState({changePages:5})
    }

    
  render() {
      
      var myDisplay = null;
      
      if(this.state.changePages == 0){
          myDisplay = (
          <Landing changeShow={this.changeShow}/>
          )
      }else if (this.state.changePages == 2){
          myDisplay = (
          <Stickers changeShow={this.changeShow} />
          )
      }else if (this.state.changePages == 3){
          myDisplay = (
          <Game changeShow={this.changeShow} />
          )
      }else if (this.state.changePages == 4){
          myDisplay = (
          <Test changeShow={this.changeShow} />
          )
      }else if (this.state.changePages == 5){
          myDisplay = (
          <About changeShow={this.changeShow} />
          )
      }
      
      
    return (
      <div className="App">
        <div className="header">
            <img id="homebut" onClick={this.home} className="hovhead" src={require("./images/header.png")} height="50"/> 
        </div>
        <div className="fooder"> 
        
        <button id="playbut" className="hovhead2" onClick={this.custom}>Customize Shoe</button> 
        <button id="playbut" className="hovhead2" onClick={this.game1}>Game 1</button>
        <button id="playbut" className="hovhead2" onClick={this.game2}>Game 2</button>
        <button id="playbut" className="hovhead2" onClick={this.about}>About Us</button>

        
        </div>
            {myDisplay}
            <ChatPanel/>
      </div>
    );
  }
}

export default App;
