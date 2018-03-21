import React, { Component } from 'react';
import './App2.css';

import mySocket from 'socket.io-client';
import Rooms from "./comp/Rooms";

class Game extends Component {
    constructor(props){
        super(props);
        

        
        this.state = {
            
            
            myImg:require("./imgs/20.png"),
            myImg2:require("./imgs/21.png"),
            myImg3:require("./imgs/25.png"),
            myImg4:require("./imgs/23.png"),
            myImg5:require("./imgs/24.png"),
            myImg6:require("./imgs/26.png"),
            myImg7:require("./imgs/27.png"),
            myImg8:require("./imgs/28.png"),
            myImg9:require("./imgs/29.png"),
            myImg10:require("./imgs/30.png"),
            myImg11:require("./imgs/31.png"),
            allusers:[],
            myId:null,
            showDisplay: false,
            gameRunnig : true
            
            
            
        }
        
    this.handleImage = this.handleImage.bind(this);
    this.handleDisplay=this.handleDisplay.bind(this);
    this.fly=this.fly.bind(this);

}

    fly() {

     var id = setInterval(frame, 1000);
     function frame() {
     var elem1 = document.getElementById("myImgApp2_");
     var elem2 = document.getElementById("myImg2App2_");
     var elem3 = document.getElementById("myImg3App2_");
     var elem4 = document.getElementById("myImg4App2_");
     var elem5 = document.getElementById("myImg5App2_");
     var elem6 = document.getElementById("myImg6App2_");
     var elem7 = document.getElementById("myImg7App2_");
     var elem8 = document.getElementById("myImg8App2_");
     var elem9 = document.getElementById("myImg9App2_");
     var elem10 = document.getElementById("myImg10App2_");
     var elem11 = document.getElementById("myImg11App2_");
     var birds = [elem1, elem2, elem3, elem4, elem5, elem6,elem7,elem8,elem9,elem10,elem11];
        for(var i = 0; i < 11; i++) {
            
            if (birds[i] != null) {
            birds[i].style.bottom = Math.floor((Math.random() * 550)) + "%";
            birds[i].style.right = Math.floor((Math.random() * 380)) + "%";
            }
        }

     }
  }
    
componentDidMount(){  
  this.socket = mySocket("https://jordanasatlandingpage5.herokuapp.com");    
    this.socket.on("userjoined",(data)=>{
        this.setState({
            allusers:data
        })
        
    });
    
    this.socket.on("yourid", (data)=>{
        this.setState({
            myId:data
        });
        
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
        
    })
    
    
    
    
    
   function myMove() {
      var elem = document.getElementById("myImgApp2_");   
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
    });    
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

        this.fly();

    }
    
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
       <img ref={"u"+obj} className="myImgApp2_" src={this.state.myImg} height={50} key={i}/>
       
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
        <div ref="thedisplay" className="myDiv1App2_">
              
                 <div id="TEXT1App2_"> Catch Your Favorite Shoes </div>
 
            
           {allimgs}
        </div>
    
        <div className="myDiv2App2_">
              
                
        <div id="textApp2_"> Enjoy Your Game</div>
           {this.state.myId}
         <img ref="myImg" id="myImgApp2_" className="myImgApp2_" src={this.state.myImg} height={50} onClick={this.handleImage}/>
         <img ref="myImg2" id="myImg2App2_" className="myImgApp2_" src={this.state.myImg2} height={50} onClick={this.handleImage}/>
         <img ref="myImg3" id="myImg3App2_" className="myImgApp2_" src={this.state.myImg3} height={50} onClick={this.handleImage}/>
         <img ref="myImg4" id="myImg4App2_" className="myImgApp2_" src={this.state.myImg4} height={50} onClick={this.handleImage}/>
         <img ref="myImg5" id="myImg5App2_" className="myImgApp2_" src={this.state.myImg5} height={50} onClick={this.handleImage}/>
         <img ref="myImg7" id="myImg7App2_" className="myImgApp2_" src={this.state.myImg7} height={50} onClick={this.handleImage}/>
         <img ref="myImg6" id="myImg6App2_" className="myImgApp2_" src={this.state.myImg6} height={50} onClick={this.handleImage}/>
         <img ref="myImg8" id="myImg8App2_" className="myImgApp2_" src={this.state.myImg8} height={50} onClick={this.handleImage}/>
              
              
      </div>
   </div>
    );
 
      }
    return (
      <div className="GameApp2__">
        {comp}
      </div>
   
   );
  }
}



export default Game;
