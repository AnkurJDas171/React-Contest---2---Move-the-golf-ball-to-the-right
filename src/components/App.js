import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };

    console.log(this.state);
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handelKeyDown = this. handelKeyDown.bind(this);

}

  //call back function
  buttonClickHandler() {


    //console.log("buttonClicked");
    let stateCopy = {...this.state};
    let renderBallCopy = stateCopy.renderBall;

    this.setState({renderBall: !renderBallCopy});


  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  handelKeyDown(event){

    // keyCode:39
    if(event.keyCode === 39){

        //console.log("keyDown event called");
        this.setState({ballPosition:{left : "5px"}});
        //console.log(this.state);

    }

  }

  //bind ArrowRight keydown event
  componentDidMount() {

    window.addEventListener("keydown", this.handelKeyDown);

  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
