//my-app runs this file first, then index


import React, { Component } from 'react';
//import $ from 'jquery';
import bsLogo from './Assets/Logo/bootstrapLogo.png';
import devLogo from './Assets/Logo/devpLogo.png';
import gitLogo from './Assets/Logo/gitlogo.png';
import inLogo from './Assets/Logo/inlogo.png';
import msLogo from './Assets/Logo/mathsoc.png';
import sparta from './Assets/Logo/spartahacks.png';
import starter from './Assets/Logo/starterhacks.png';
import reactLogo from './Assets/Logo/ReactLogo.svg';
import foo from './Assets/foo.png';
import bar from './Assets/bar.png';
import blank from './Assets/blank.png';

import './App.css';
var createReactClass = require('create-react-class');
var LinkBtn = createReactClass({
  onLinkClick: function(evt) {
    window.open(this.props.linker);
  },
  render: function() {    
    return <button  onClick={this.onLinkClick} type="button" className="btn btn-md btn-hover btn-info">{this.props.txt}</button>;
  }
});

var Tile = createReactClass({
  render: function(){
    console.log(this.props.link);
    return <a href= {this.props.link} target="_blank"><img src={this.props.pic} height="50px"></img></a> 
  }
});

var bigScreen = {
    backgroundImage: 'url(' + bar + '),url(' + foo + ')'
};
var smolScreen = {
    backgroundImage: 'url(' + blank + ')'
};
var setter;
class App extends Component {
  //screen resize
  constructor(props){
    super(props);
    this.state={width: '0', height: '0'};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions(){    
    if(this.state.width < 1200){
      setter=smolScreen;
      console.log("screen should be smol");
    }else{
      setter=bigScreen;
      console.log("screen should be BIG");
    } 
    this.setState({width: window.innerWidth, height: window.innerHeight});
    console.log(setter);
  }
  

  //screen resize



  render() {
    console.log(setter);
    return (
      <div className="App">
        <div className="jumbotron">
          <div className="container">
            <h1>Hi! It's Kristy Gao.</h1>
            <h3>1B Computer Science student at the University of Waterloo</h3>
            <h4>Software Developer & Hackathon Founder</h4>
            <LinkBtn txt ="Resume" linker="https://drive.google.com/file/d/1QoIAg8VjW4VIsM4_My77wZJfrjWgWkuF/view?usp=sharing"/> <LinkBtn txt ="Contact" linker="mailto:gaoxuekristy@gmail.com?Subject=Hi!"/>   
            <div className="Row">
              <Tile link="https://github.com/ItsJohnCena/" pic={gitLogo}/> <Tile link="https://devpost.com/gaoxuekristy" pic={devLogo}/> <Tile link="https://linkedin.com/in/kristy-gao-07067b153/" pic={inLogo}/>             
            </div>
          </div>
        </div> 
        <div className="more-info" style={setter}>
        <div className="container">
          <div className="row" >
              <div className="col-md-4">
                <h3>HACKATHON FOUNDER & ORGANIZER</h3>
                <p>Founded Guelph's first highschool hackathon, SpartaHacks. Currently an Executive Logistics Coordinator for StarterHacks.</p>
                  <Tile link="https://hackday.mlh.io/spartahacks2" pic={sparta}/>
                  <Tile link="https://starterhacks.ca/" pic={starter}/>
              </div>
              <div className="col-md-4">
                <h3>SOFTWARE DEVELOPER</h3>
                <p>10+ Hackathons & projects, 3 hackathon awards, 4+ years of programming expereince, and a wide palette of developer skills.</p>
                <p>This website is created with
                  <Tile link="https://reactjs.org/" pic={reactLogo}/>
                  <Tile link="https://getbootstrap.com/" pic={bsLogo} />
                </p> 
              </div>
              <div className="col-md-4">
                <h3>COMMUNITY LEADER</h3>
                <p>Mathsoc First Year Rep, Math Council member, Mathsoc Marketing, Math Shadow Ambassador, Hip Hop dance member, figure skater, and more.</p>
                <Tile link="http://mathsoc.uwaterloo.ca/" pic={msLogo}/>
              </div>
          </div>
        </div>
      </div>  
      </div>
    );
  }
}

export default App;