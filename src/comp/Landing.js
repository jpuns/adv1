import React, { Component } from 'react';
import '../App.css';
import Jordan from './Jordan.js';
import Asat from './Asat.js';


class Landing extends Component {
    constructor(props){
        super(props);
            
            this.state ={
                changePages:false
            }
            this.playGame = this.playGame.bind(this);
            this.aboutpage = this.aboutpage.bind(this);
        
    }

    
    changeShow(bool){
        var arg = bool;
        this.setState({
            changePages:arg})
        }

    playGame(){
       this.props.changeShow(2);
   }

    aboutpage(){
       this.props.changeShow(5);
   }
    
  render() {

            
        
        
    return (
    
     <div className="container">
        
        <h1 id="tagline">"Team up with shoe designers, to create your own Nike Shoe."</h1>
        
        <div className="homeass">
            <img id="cus" className="hov" onClick={this.playGame} src={require("../images/custom.png")}/>
            <img id="tree1" className="hov" src={require("../images/tree1.png")}/>
            <img id="tree2" className="hov" src={require("../images/tree2.png")}/>
            <img id="tree3" src={require("../images/tree3.png")}/>
            <img id="aboutbut" className="hov" onClick={this.aboutpage} src={require("../images/about.png")}/>
        </div>
        
        

            
            
            
           
            
            <div>
            
 
            
            </div>
        </div>
      
    );
  }
}

export default Landing;
