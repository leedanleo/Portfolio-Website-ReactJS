import React from "react";
import Nature from "./video/waterfall1.mp4";

export default class Background extends React.Component {
    render() {
      return (
            <video controls autoPlay loop muted>
              <source src={Nature} type="video/mp4" />
            </video>
      );
   }
}