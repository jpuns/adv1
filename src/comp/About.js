import React, { Component } from 'react';

import './About.css';

class About extends Component {
    constructor(props){
          super(props);
          this.state = {
              showj: true,
              showa: true
          }
        this.jtoggle = this.jtoggle.bind(this);
        this.atoggle = this.atoggle.bind(this);
      }
    
    
    jtoggle(){
        if (this.state.showj == true){
        this.setState({
            showj:false
        })
    }else if (this.state.showj == false){
        this.setState({
            showj:true
        })
    }
    }
    
    atoggle(){
    if (this.state.showa == true){
    this.setState({
        showa:false
        })
    }else if (this.state.showa == false){
        this.setState({
            showa:true
        })
    }
    }
    
    
  render() {
      
      
      
      
      var jdisplay = null;
      
      if(this.state.showj == true){
          jdisplay = (
          <img id="jpunsbox" onClick={this.jtoggle} src={require("../images/jbox.png")}/>
          )
      } else if (this.state.showj == false){
          jdisplay = (
          <img id="jpunsbox2" onClick={this.jtoggle} src={require("../images/jbox2.png")}/>
          )
      }
      
      var adisplay = null;
      
      if(this.state.showa == true){
          adisplay = (
          <img id="asatbox" onClick={this.atoggle} src={require("../images/abox.png")}/>
          )
      } else if (this.state.showa == false){
          adisplay = (
          <img id="asatbox2" onClick={this.atoggle} src={require("../images/abox2.png")}/>
          )
      }
      
      
      
      
      
    return (
                                         
        <div className="about">
              {jdisplay}
              {adisplay}
            
       
        </div>
      
    );
  }
}

export default About;
