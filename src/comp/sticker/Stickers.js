import React, { Component } from 'react';
import './App.css';

import mySocket from 'socket.io-client';

class Stickers extends Component {
    constructor(props){
        super(props);
        this.state = {
            myImg:require("./imgs/2.png"),
            myImg2:require("./imgs/3.png"),
           myImg3:require("./imgs/1.png"),
            myImg4:require("./imgs/4.png"),
              myImg5:require("./imgs/5.png"),
            allusers:[],
            myId:null
        }
    this.handleImage = this.handleImage.bind(this);
     
      }
    
    
componentDidMount(){  
  this.socket = mySocket("https://jordanasatlandingpage3.herokuapp.com/");    
    this.socket.on("userjoined",(data)=>{
        this.setState({
            allusers:data
        })
        
    });
    
    this.socket.on("yourid", (data)=>{
        this.setState({
            myId:data
        })
        
    })
    
   function myMove() {
  var elem = document.getElementById("myImg");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
    
this.socket.on("newmove",(data)=>{
    this.refs["u"+data.id].style.left = data.x+"px";
    this.refs["u"+data.id].style.top = data.y+"px";
      this.refs["u"+data.id].src = data.src;
})    
    
 this.refs.thedisplay.addEventListener("mousemove", (ev)=>{ 
     
if(this.state.myId === null){
    
    return false;
}     
    this.refs["u"+this.state.myId].style.left = ev.pageX+"px";
     this.refs["u"+this.state.myId].style.top = ev.pageY+"px";
     
     this.socket.emit("mymove", {
         x:ev.pageX,
         y:ev.pageY,
         id:this.state.myId,
         src:this.refs["u"+this.state.myId].src
         
     })
     
 });

   
}
      
   handleImage(evt){
        this.refs["u"+this.state.myId].src = evt.target.src;
    }
 
  render() {
   var allimgs = this.state.allusers.map((obj, i)=>{
       return(
       <img ref={"u"+obj} className="myImg" src={this.state.myImg} height={50} key={i}/>
       
       )
       
   })
      
   
    return (
      <div>
        <div ref="thedisplay" className="myDiv1">
        <button id="mybut" onclick="myMove()">Start Game </button>
           {allimgs}
        </div>
        
        <div className="myDiv2">
        <div id="text"> Enjoy Your Game</div>
           {this.state.myId}
         <img ref="myImg" id="myImg" className="myImg" src={this.state.myImg} height={50} onClick={this.handleImage}/>
         <img ref="myImg2" id="myImg2" className="myImg" src={this.state.myImg2} height={50} onClick={this.handleImage}/>
           <img ref="myImg3" id="myImg3" className="myImg" src={this.state.myImg3} height={50} onClick={this.handleImage}/>
         <img ref="myImg4" id="myImg4" className="myImg" src={this.state.myImg4} height={50} onClick={this.handleImage}/>
         <img ref="myImg5" id="myImg5" className="myImg" src={this.state.myImg5} height={50} onClick={this.handleImage}/>
      </div>
   </div>
   
   );
  }
}

export default Stickers;
