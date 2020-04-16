import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Recorder.css";

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //   console.log("It's Working!");
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    // Success callback
    .then(function (stream) {
      var mediaRecorder = new MediaRecorder(stream);
      //   mediaRecorder.start();
      console.log(mediaRecorder);
    })
    // Error callback
    .catch(function (err) {
      console.log("The following getUserMedia error occured: " + err);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  componentDidMount() {}
  componentDidUpdate() {}

  startRecording = () => {
    console.log("recorder started");
  };

  stopRecording = () => {
    console.log("recorder stopped");
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Container>
            <Row>
              <Col>
                <Button onClick={this.startRecording}>Record</Button>
              </Col>
              <Col>
                <Button onClick={this.stopRecording}>Stop</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Recorder;
