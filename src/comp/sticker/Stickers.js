import React, { Component } from 'react';
import './App.css';

import mySocket from 'socket.io-client';
import Rooms from "./comp/Rooms";

class Stickers extends Component {
    constructor(props){
        super(props);
        this.state = {
            myImg1:require("./imgs/tab1.png"),
            myImg2:require("./imgs/tab2.png"),
            myImg3:require("./imgs/tab3.png"),
            myImg4:require("./imgs/base1.png"),
            myImg5:require("./imgs/base2.png"),
            myImg6:require("./imgs/7.png"),
            myImg7:require("./imgs/base3.png"),
            myImg8:require("./imgs/lace1.png"),
            myImg9:require("./imgs/lace2.png"),
            myImg10:require("./imgs/lace3.png"),
            myImg11:require("./imgs/mid1.png"),
            myImg12:require("./imgs/mid2.png"),
            myImg13:require("./imgs/mid3.png"),
            myImg14:require("./imgs/logo1.png"),
            myImg15:require("./imgs/logo2.png"),
            myImg16:require("./imgs/logo3.png"),
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
       <img ref={"u"+obj} className="myImg" src={this.state.myImg} key={i}/>
       
       )
       
   })
   var allstickers = this.state.stickers.map((obj, i)=>{
       var mystyle = {left:obj.x, top:obj.y};
       
       return (
        <img style={mystyle} key={i} src={obj.src} 
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
              
           {allimgs}
            {allstickers}
              <img ref="myImg6" id="myImg6" className="myImg6" src={this.state.myImg6} height={50} />
              <div id="idposition">{this.state.myId}</div>
        </div>
        
    <div className="myDiv2">
              
        <div id="text">Place your base</div>
         <img ref="myImg1" id="myImg11" className="myImg1" src={this.state.myImg11} onClick={this.handleImage}/>
         <img ref="myImg2" id="myImg12" className="myImg1" src={this.state.myImg12} onClick={this.handleImage}/>
         <img ref="myImg3" id="myImg13" className="myImg1" src={this.state.myImg13} onClick={this.handleImage}/>
        </div>

    <div className="myDiv3">
              
        <div id="text">Place your Midsole</div>
         <img ref="myImg4" id="myImg4" className="myImg1" src={this.state.myImg4} onClick={this.handleImage}/>
         <img ref="myImg5" id="myImg5" className="myImg1" src={this.state.myImg5}  onClick={this.handleImage}/>
         <img ref="myImg7" id="myImg7" className="myImg1" src={this.state.myImg7}  onClick={this.handleImage}/>
      </div>
 
    <div className="myDiv4">
              
        <div id="text">Place your Lace</div>    
         <img ref="myImg1" id="myImg8" className="myImg1" src={this.state.myImg8} onClick={this.handleImage}/>
         <img ref="myImg2" id="myImg9" className="myImg1" src={this.state.myImg9} onClick={this.handleImage}/>
         <img ref="myImg3" id="myImg10" className="myImg1" src={this.state.myImg10} onClick={this.handleImage}/>

      </div>
    <div className="myDiv5">
              
        <div id="text">Place your Logo</div>
         <img ref="myImg1" id="myImg14" className="myImg1" src={this.state.myImg14} onClick={this.handleImage}/>
         <img ref="myImg2" id="myImg15" className="myImg1" src={this.state.myImg15} onClick={this.handleImage}/>
         <img ref="myImg3" id="myImg16" className="myImg1" src={this.state.myImg16} onClick={this.handleImage}/>

      </div>
    <div className="myDiv6">
              
        <div id="text">Place your backtab</div>   
         <img ref="myImg1" id="myImg1" className="myImg1" src={this.state.myImg1} onClick={this.handleImage}/>
         <img ref="myImg2" id="myImg2" className="myImg1" src={this.state.myImg2} onClick={this.handleImage}/>
         <img ref="myImg3" id="myImg3" className="myImg1" src={this.state.myImg3} onClick={this.handleImage}/>
 
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
