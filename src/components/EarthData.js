import React from "react";
import { Container, Row, Col } from "reactstrap";
import doveImg from "../assets/img/dove.webp";

const EarthData = () => {
  return (
    <Container className="data-section">
      <Row>
        <Col
          xs={12}
          lg={6}
          className="d-flex align-items-center order-lg-1 order-2"
        >
          <article className=" d-table m-auto">
            <h2>The leading provider of global daily Earth data</h2>
            <p>
              Planet revolutionized the earth observation industry with the
              highest frequency satellite data commercially available.
            </p>
            <p>
              Planet’s data is transforming the way companies and governments
              use satellite imagery data, delivering insights at the daily pace
              of change on earth. This differentiated data set powers
              decision-making in a myriad of industries including agriculture,
              forestry, mapping, and government. Our fleet of over 200 earth
              imaging satellites, the largest in history, images the whole Earth
              land mass daily.
            </p>
            <p>
              <b>Planet helps you anticipate what's next.</b>
            </p>
            <a className="btn data" href="index.html">WHY PLANET ?</a>
          </article>
        </Col>
        <Col xs={12} lg={6} className="order-lg-2 order-1">
          <img className="img-fluid" src={doveImg} alt="dove" />
        </Col>
      </Row>
    </Container>
  );
};

export default EarthData;
