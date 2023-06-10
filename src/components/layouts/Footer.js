import { Container, Row, Col } from "reactstrap";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsBehance,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3}>
            <p>Products</p>
            <ul>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
            </ul>
          </Col>
          <Col lg={3}>
            <p>Products</p>
            <ul>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
            </ul>
          </Col>
          <Col lg={3}>
            <p>Products</p>
            <ul>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
            </ul>
          </Col>
          <Col lg={3}>
            <p>Products</p>
            <ul>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
              <li>Planet </li>
              <li>Planet Monitoring</li>
            </ul>
          </Col>
          <div className="border-bb"></div>
          <Col lg={8}>
            <p className="company">
              © 2023 Planet Labs PBC. All rights reserved. | Privacy Policy |
              California Privacy Notice | Your Privacy Choices | Cookie Notice |
              Terms of Use
            </p>
          </Col>
          <Col lg={4}>
            <ul className="social-media">
              <li>
                <BsFacebook size={19} />
              </li>
              <li>
                <BsInstagram size={19} />
              </li>
              <li>
                <BsTwitter size={19} />
              </li>
              <li>
                <BsLinkedin size={19} />
              </li>
              <li>
                <BsBehance size={19} />
              </li>
              <li>
                <BsYoutube size={19} />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
