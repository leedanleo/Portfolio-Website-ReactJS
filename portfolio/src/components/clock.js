import React from "react";
import './style/clock.css';
export default class Clock extends React.Component {
    state = {
        time: new Date() /* state that is set in the beginning*/
    };

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000); /* set interval and calls tick function every 1000 millisecodnds*/
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){ 
        this.setState({
            time: new Date() /*returns the numeric value of the date*/
        });
    }
    render() {
      return (
          /*this.state.time.toLocaleTimeString() gets the local time it is built into some browsers apparently*/
          <div id="clock-style">
              {this.state.time.toLocaleTimeString()} 
          </div>
        );
    }
}