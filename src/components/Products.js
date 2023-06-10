import { Container, Row, Col } from "reactstrap";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
const Products = () => {
  return (
    <div>
      <Container className="products-section">
        <Row>
          <Col lg={6}>
            <h2>Planet Products</h2>
            <p>
              Planet provides high cadence, global coverage and efficient
              delivery with an open, accessible platform. We do this through
              industry-leading solutions.
            </p>
            <a className="btn products" href="index.html">
              Explore Our Products
            </a>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={3}>
            <MdOutlineScreenshotMonitor size={48} className="mb-3"/>
            <h4>Planet Monitoring</h4>
            <p>
              Planet Monitoring passively images the Earth’s landmass every day,
              empowering you with comprehensive, accurate data about our
              changing planet.
            </p>
          </Col>
          <Col lg={3}>
            <MdOutlineScreenshotMonitor size={48} className="mb-3"/>
            <h4>Planet Monitoring</h4>
            <p>
              Planet Monitoring passively images the Earth’s landmass every day,
              empowering you with comprehensive, accurate data about our
              changing planet.
            </p>
          </Col>
          <Col lg={3}>
            <MdOutlineScreenshotMonitor size={48} className="mb-3"/>
            <h4>Planet Monitoring</h4>
            <p>
              Planet Monitoring passively images the Earth’s landmass every day,
              empowering you with comprehensive, accurate data about our
              changing planet.
            </p>
          </Col>
          <Col lg={3}>
            <MdOutlineScreenshotMonitor size={48} className="mb-3"/>
            <h4>Planet Monitoring</h4>
            <p>
              Planet Monitoring passively images the Earth’s landmass every day,
              empowering you with comprehensive, accurate data about our
              changing planet.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
