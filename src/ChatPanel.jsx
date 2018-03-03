import React, { Component } from 'react';
import mySocket from 'socket.io-client';

import './App.css';

class ChatPanel extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            myname:"",
            mode:0,
            allnames:[],
            allmsgs:[],
            mymsg:"",
            minimized: 0
        }
        
        this.joinChat = this.joinChat.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handleMyMsg=this.handleMyMsg.bind(this);
        this.sendMsg=this.sendMsg.bind(this);
        this.hide=this.hide.bind(this);

    }
    
    joinChat(){
        this.setState({
            mode:1
        })        
        this.socket = mySocket("http://localhost:10000 /"); //http://localhost:10000 //https://jordanasatlandingpage2.herokuapp.com/
        this.socket.emit("uname", this.state.myname);
        this.socket.on("names", (date)=>{
            this.setState({
                
                allnames:date
            });
            
        });
        
        this.socket.on("msgs", (date)=>{
            
            this.setState({
                allmsgs:date
                
            })
        });
    }
    
    handleName(evt){
        this.setState({
            myname:evt.target.value
            
        })
    }
    
    handleMyMsg(evt){
        this.setState({
            mymsg:evt.target.value
        })
    }
    
    hide(evt){
        if (this.state.minimized === 0) {
           this.setState({minimized:1});
        } else {
           this.setState({minimized:0});
        }
    }
    
    sendMsg(){
        var msg = this.state.myname+": "+this.state.mymsg;
        this.socket.emit("sendmsg", msg);
        
    }
    
    getHeight() {
        return this.state.minimized === 1 ? 32 : 400;
    }
    
    
   
  render() {
            
      var comp = null;
      
      if (this.state.mode === 0){
      comp = (
      <div id = "joinBox">
        <input id="inputname" type="text" placeholder="type in your name" onChange={this.handleName} />
          <button id="joinbut" onClick={this.joinChat}> Join</button>
        <button id="but1" onClick={this.hide}> x</button>       
          </div>
      )
         } else if (this.state.mode === 1){
             
        var allmsgs = this.state.allmsgs.map((obj,i)=>{
            return (
            
            <div key={i}>
                {obj}
                </div>
            )
            
        })
             comp = (
                <div id="chatBox">
                  <div id="controls">
                 <input id="inputmsg" type="text" placeholder="type your msg here" onChange={this.handleMyMsg}/>
                 <button id="msgbut" onClick={this.sendMsg}>Send</button>
                <button id="but2" onClick={this.hide}> x</button>          </div>
                 <div id="chatDisplay">{allmsgs}</div>
               </div>

                 
             );
         }
  
      var allnames = this.state.allnames.map((obj, i)=>{
          return (
             <div key={i}>
              {obj}
              </div>
          )
      })
      
    return (
      <div id="chat-window" style={{height:this.getHeight()}}>
        {comp}
        <br/>    
        <div id="namaBox">
        {allnames}
        </div>
      </div>
        
        
    );
  }
}

export default ChatPanel;
