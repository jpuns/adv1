import React, { Component } from 'react';
import './App.css';

import mySocket from 'socket.io-client';
import Rooms from "./comp/Rooms";

class Stickers extends Component {
    constructor(props){
        super(props);
        this.state = {
            myImg:require("./imgs/1.png"),
            myImg2:require("./imgs/2.png"),
           myImg3:require("./imgs/3.png"),
            myImg4:require("./imgs/4.png"),
              myImg5:require("./imgs/5.png"),
                myImg6:require("./imgs/6.png"),
            allusers:[],
            myId:null,
            showDisplay: false,
            stickers:[]
        }
        
    this.handleImage = this.handleImage.bind(this);
     this.handleDisplay=this.handleDisplay.bind(this);
      }
    
    
componentDidMount(){  
    this.socket = mySocket("https://jordanasatlandingpage3.herokuapp.com");    //http://localhost:10000 https://jordanasatlandingpage3.herokuapp.com/
        this.socket.on("userjoined",(data)=>{
            this.setState({
                allusers:data
            })

        });
    
    
    this.socket.on("yourid", (data)=>{
        this.setState({
            myId:data
        })
        
        this.refs.thedisplay.addEventListener("mousemove", (ev)=>{ 
     
            if(this.state.myId === null){

                return false;
            }     
                this.refs["u"+this.state.myId].style.left = ev.pageX+"px";
                 this.refs["u"+this.state.myId].style.top = ev.pageY+"px";

                 this.socket.emit("mymove", {
                     x:ev.pageX+"px",
                     y:ev.pageY+"px",
                     id:this.state.myId,
                     src:this.refs["u"+this.state.myId].src

            })

            });
        
        this.refs.thedisplay.addEventListener("click",
                (ev)=>{
                    this.socket.emit("stick", {
                        x:ev.pageX+"px",
                        y:ev.pageY+"px",
                        src:this.refs["u"+this.state.myId].src
                    })

                });
        
        this.socket.on("newsticker", (data)=>{
            this.setState({
                stickers: data
            })
        })
    });
   
    
    this.socket.on("newmove",(data)=>{
        this.refs["u"+data.id].style.left = data.x+"px";
        this.refs["u"+data.id].style.top = data.y+"px";
        this.refs["u"+data.id].src = data.src;
    });    
    
}
/*    
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
*/
   

      
   handleImage(evt){
        this.refs["u"+this.state.myId].src = evt.target.src;
    }
    
    handleDisplay(roomString){
        this.setState({
            showDisplay:true
        });
        this.socket.emit("joinroom", roomString);
        
    }
 
  render() {
   var allimgs = this.state.allusers.map((obj, i)=>{
       return(
       <img ref={"u"+obj} className="myImg" src={this.state.myImg} height={117.5} key={i}/>
       
       )
       
   })
   var allstickers = this.state.stickers.map((obj, i)=>{
       var mystyle = {left:obj.x, top:obj.y};
       
       return (
        <img style={mystyle} key={i} src={obj.src} height={117.5}
           className="myImg" />
       )
   })   
   var comp = null;
      if(this.state.showDisplay === false){
          comp = <Rooms
            handleDisplay={this.handleDisplay}
          />;
          
      } else {
          comp = (
    <div>
        <div ref="thedisplay" className="myDiv1">
        <button id="mybut">Start Game </button>
           {allimgs}
            {allstickers}
              <img ref="myImg6" id="myImg6" className="myImg6" src={this.state.myImg6} height={50} />
        </div>
        
        <div className="myDiv2">
              
        <div id="text"> Enjoy Your Game</div>
           {this.state.myId}
         <img ref="myImg" id="myImg" className="myImg" src={this.state.myImg} onClick={this.handleImage}/>
         <img ref="myImg2" id="myImg2" className="myImg" src={this.state.myImg2} onClick={this.handleImage}/>
         <img ref="myImg3" id="myImg3" className="myImg" src={this.state.myImg3} onClick={this.handleImage}/>
         <img ref="myImg4" id="myImg4" className="myImg" src={this.state.myImg4} onClick={this.handleImage}/>
         <img ref="myImg5" id="myImg5" className="myImg" src={this.state.myImg5}  onClick={this.handleImage}/>
      </div>
   </div>
    )
      }
    return (
      <div className="App">
        {comp}
      </div>
   
   );
  }
}

export default Stickers;
