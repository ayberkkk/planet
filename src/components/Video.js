import React from "react";
import { Container, Row, Col } from "reactstrap";
import agro from "../assets/img/agro.webp";

const Video = () => {
  return (
    <div className="video">
      <div className="video-content">
        <div className="video-main-div">
          <video
            className="d-lg-block d-none"
            src="https://assets.planet.com/web/videos/home/field.mp4"
            preload="auto"
            autoPlay
            loop
            style={{ width: "100%", height: "auto" }}
          ></video>
          <img src={agro} className="img-fluid" alt="argo" />
        </div>
      </div>
      <div className="text-content">
        <Container>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6} className="mt-5">
              <h2>High frequency geospatial data that drives innovation</h2>
              <p className="mt-5">
                Planet partners with organizations in agriculture and
                government, both intelligence and civilian agencies, and we’re
                expanding into newer markets like forestry, energy and natural
                resources, state and local government, and sustainability.
              </p>
              <a className="btn video-btn" href="index.html">
                Insights For Your Industry
              </a>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="mt-5">
            <Row>
              <Col lg={4}>
                <h3>Agriculture</h3>
                <p>
                  Empowering agriculture companies with frequent, comprehensive
                  data to help growers make more informed decisions, improve
                  yields, and lower inputs.
                </p>
              </Col>
              <Col lg={4}>
                <h3>State & Local Governments</h3>
                <p>
                  Transforming the way state and local governments manage
                  precious resources, resulting in safer, cleaner, and more
                  productive communities.
                </p>
              </Col>
              <Col lg={4}>
                <h3>Sustainability</h3>
                <p>
                  Helping industry and government transition to more sustainable
                  practices that reduce risk, while promoting economic growth
                  and ecological stewardship.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Video;
