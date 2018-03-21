import React, { Component } from 'react';
import '../App.css';

import mySocket from 'socket.io-client';

class Rooms extends Component {
        constructor(props){
        super(props);
        this.state = {
            myImg1:require("../imgs/Asset 10.png"),
            myImg2:require("../imgs/Asset 11.png"),
            myImg3:require("../imgs/Asset 13.png"),
            myImg4:require("../imgs/Asset 14.png"),
            myImg5:require("../imgs/Asset 1.png"),
            myImg6:require("../imgs/Asset 2.png"),
            myImg7:require("../imgs/Asset 3.png"),
            myImg8:require("../imgs/Asset 4.png"),
            myImg9:require("../imgs/Asset 5.png"),
        }
        }
 //
  render() {
   
   
    return (
        <div>
            <div id="container">
                <img ref="myImg1" id="title1" src={this.state.myImg1}/>
                <img ref="myImg3" id="room1" className="myImg1" src={this.state.myImg3} onClick={this.props.handleDisplay.bind(this,"room1")}/>
                <img ref="myImg4" id="room2" className="myImg1" src={this.state.myImg4} onClick={this.props.handleDisplay.bind(this,"room2")}/>
                <img ref="myImg2" id="title2" src={this.state.myImg2}/>
                <div className="stepDiv2">
                    <img ref="myImg5" id="step1" src={this.state.myImg5}/>
                </div>
                <div className="stepDiv3">
                    <img ref="myImg6" id="step1" src={this.state.myImg6}/>
                </div>
                <div className="stepDiv4">
                    <img ref="myImg7" id="step1" src={this.state.myImg7}/>
                </div>
                <div className="stepDiv5">
                    <img ref="myImg8" id="step1" src={this.state.myImg8}/>
                </div>
                <div className="stepDiv6">
                    <img ref="myImg9" id="step1" src={this.state.myImg9}/>
                </div>


            </div>
        </div>
   );
  }
}

export default Rooms;
