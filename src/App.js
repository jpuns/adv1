import React, { Component } from 'react';
import './App.css';
import Landing from './comp/Landing.js';
import Stickers from './comp/sticker/Stickers.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            changePages: 0,
        }
        this.changeShow = this.changeShow.bind(this);
    }
    
    changeShow(bool){
        var arg = bool;
        this.setState({changePages:arg})
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
      }
      
    return (
      <div className="App">
            {myDisplay}
      </div>
    );
  }
}

export default App;
