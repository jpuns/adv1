import React, { Component } from 'react';
import '../App.css';

import mySocket from 'socket.io-client';

class Rooms extends Component {
        constructor(props){
            super(props);
        }
 
  render() {
   
   
    return (
        <div>
            <button onClick={this.props.handleDisplay.bind(this,"room1")}>Room1</button>
            <button onClick={this.props.handleDisplay.bind(this,"room2")}>Room2</button>

        </div>
   );
  }
}

export default Rooms;
