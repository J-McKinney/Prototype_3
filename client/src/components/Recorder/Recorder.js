import React, { Component } from "react";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import "./Recorder.css";

// const mediaRecorder = new MediaRecorder(stream);

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   console.log("It's Working!");
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    // Success callback
    .then(function (stream) {

      var mediaRecorder = new MediaRecorder(stream);
      console.log(mediaRecorder);

    })
    // Error callback
    .catch(function (err) {
      console.log("The following getUserMedia error occured: " + err);
    });
} 
else {
  console.log("getUserMedia not supported on your browser!");
}

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: true,
    };

    this.startRecording = this.startRecording.bind(this);
  }

  startRecording = () => {
    // mediaRecorder.start();
    console.log("recorder started");
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Button onClick={this.startRecording}>Record</Button>
          <Button>Stop</Button>
        </div>
      </>
    );
  }
}

export default Recorder;
