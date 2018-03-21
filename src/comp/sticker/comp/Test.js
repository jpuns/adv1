import React, { Component } from 'react';
import mySocket from 'socket.io-client';
import '../App.css';

class Test extends Component {
        constructor(props){
            super(props);
            
            this.state= {
                screen: 0,
                host:null,
                qobj:{q:null, o1:null, o2:null, o3:null, o4:null},
                question1:'',
                myname:"",
                allnames:[],
                myImg19:require("../imgs/Asset 15.png"),
                myImg20:require("../imgs/Asset 19.png"),
            }
            this.handleName=this.handleName.bind(this);
        }
    
    componentDidMount(){
        this.socket = mySocket("https://jordanasatlandingpage4.herokuapp.com "); //https://jordanasatlandingpage3.herokuapp.com //http://localhost:10000
        
        this.socket.on("newq", (data)=>{
            this.setState({
                qobj:data
            })
        })
        this.socket.on("result", (data)=>{
            this.setState({
                question1:data
        })
    })
        this.socket.on("userjoined2", (data)=>{
            this.setState({
                allnames:data
            })
        })
    }
                       
                       
    
    handleRoom=(roomStr)=>{
        this.setState({
            screen:1
        });
        
        this.socket.emit("joinroom", roomStr);
        this.socket.emit("uname", this.state.myname);
        this.socket.on("names", (data)=>{
            this.setState({
                
                allnames:data
            });
            
        });
    }
    
    handleHost=(isHost)=>{
        this.setState({
            screen:2,
            host:isHost
        });
    }
    
    handleQ=()=>{
        var obj = {
            q:this.refs.q.value,
            o1:this.refs.o1.value,
            o2:this.refs.o2.value,
            o3:this.refs.o3.value,
            o4:this.refs.o4.value,
            a:this.refs.a.value
        };
        
        this.socket.emit("qsubmit", obj);
        
        
    }
    handleName(evt){
        this.setState({
            myname:evt.target.value+", "
            
        })
    }
    
    handleA=(optionNum)=>{
        this.socket.emit("answer", optionNum);
    }
    sendThru(){
        this.inputTitle.value = "";
        
    }
 
  render() {
      
      var comp = null;
      
      if(this.state.screen === 0) {
          comp = (
            <div>
              
              <input ref="n" type="text" placeholder="enter your name" onChange={this.handleName}/>
                <button className="btn btn-3"  onClick={this.handleRoom.bind(this, "room1")}> Room1 </button>
                <button className="btn btn-3"  onClick={this.handleRoom.bind(this, "room2")}> Room2 </button>
            </div>
          )
      } else if (this.state.screen === 1) {
          comp = (
            <div>CHOOSE YOUR ROLE
                <button className="btn btn-3"  onClick={this.handleHost.bind(this, true)}>Host</button>
                <button className="btn btn-3"  onClick={this.handleHost.bind(this, false)}>Player</button>
            </div>
          )
          
      } else if (this.state.screen === 2){
          if (this.state.host === true){
              comp = (
                <div>
                  
                    <input ref="q" id="inputLabel" type = "text" placeholder="Ask a question for the Players" />
                    <input ref="o1" type = "text" placeholder="Option 1" />
                    <input ref="o2" type = "text" placeholder="Option 2" />
                    <input ref="o3" type = "text" placeholder="Option 3" />
                    <input ref="o4" type = "text" placeholder="Option 4" />
                    <select ref="a">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                    </select>
                    <button className="btn btn-3" onClick={this.handleQ}>Submit the Question</button>
                    <h1>{this.state.question1}</h1>
                    
                </div>
              )
          } else if (this.state.host === false){
              comp = (
                <div>
                    <h2>The Question: {this.state.qobj.q}</h2>
                    <button className="btn btn-3" onClick={this.handleA.bind(this,"1")}>{this.state.qobj.o1}</button>
                    <button className="btn btn-3" onClick={this.handleA.bind(this,"2")}>{this.state.qobj.o2}</button>
                    <button className="btn btn-3" onClick={this.handleA.bind(this,"3")}>{this.state.qobj.o3}</button>
                    <button className="btn btn-3" onClick={this.handleA.bind(this,"4")}>{this.state.qobj.o4}</button>
          
                    
                    <h1>{this.state.question1}</h1>
                    
                </div>
              )
          }
      }
   
   
    return (
        <div id="container">
        
            <img ref="myImg19" id="title19" src={this.state.myImg19}/>
        <div id="alluserscontainer">      
            <p id="allusers">Number of Users Played:{this.state.allnames.length} </p>
            <p>All Users Played:{this.state.allnames}</p>
            <img ref="myImg20" id="title22" src={this.state.myImg20}/>
        </div>
        {comp}
        </div>
   );
  }
}

export default Test;
