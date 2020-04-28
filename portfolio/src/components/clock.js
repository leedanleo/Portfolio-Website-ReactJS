import React from "react";
import './style/clock.css';
export default class Clock extends React.Component {
    state = {
        time: new Date()
    };

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            time: new Date() 
        });
    }
    render() {
      return (
          <div id="clock-style">
              {this.state.time.toLocaleTimeString()}
          </div>
        );
    }
}