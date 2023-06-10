import { Container, Row, Col } from "reactstrap";

const Gallery = () => {
  return (
    <div className="gallery">
      <Container>
        <Row>
          <Col lg={12}>
            <h2>Our Daily Planet</h2>
            <p>
              Every day, people around the world are using Planet data to reveal
              the changes happening in the areas they care about most.
            </p>
            <a className="btn gallery-btn" href="index.html">
              Take me to the Gallery
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
