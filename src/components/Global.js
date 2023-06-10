import { Container, Row, Col } from "react-bootstrap";
import mockup from "../assets/img/mockup.webp";
const Global = () => {
  return (
    <div className="global-section">
      <Container>
        <Row>
          <Col lg={6}>
            <img className="img-fluid mt-5  mb-5" src={mockup} alt="mockup" />
          </Col>
          <Col lg={6} className="mt-5">
            <p className="title">
              Planet is serving our customers with the tools they need to derive
              even more value from our dataset
            </p>
            <p className="desc">
              On average, Planet has 1700 images of every place on earth. This
              is an unprecedented dataset - we’re creating a global, near-daily
              stream of satellite imagery that can be fed into a variety of
              workflows for commercial and humanitarian applications, enabling
              an ecosystem of apps and services.
            </p>
            <a className="btn global" href="index.html">Go Global</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Global;
