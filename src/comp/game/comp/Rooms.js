import React, { Component } from 'react';
import '../App2.css';

import mySocket from 'socket.io-client';

class Rooms extends Component {
        constructor(props){
            super(props);
                this.state = {
                    myImg1:require("../imgs/Asset 21.png"),
                    //myImg2:require("../imgs/Asset 11.png"),
                    myImg3:require("../imgs/Asset 13.png"),
                    myImg4:require("../imgs/Asset 14.png"),
                }
        }
 
  render() {
   
   
    return (
        <div id="container">
                <img ref="myImg1" id="title1_" src={this.state.myImg1}/>
                <img ref="myImg3" id="room1" className="myImg1" src={this.state.myImg3} onClick={this.props.handleDisplay.bind(this,"room1")}/>
                <img ref="myImg4" id="room2" className="myImg1" src={this.state.myImg4} onClick={this.props.handleDisplay.bind(this,"room2")}/>
           

        </div>
   );
  }
}

export default Rooms;
