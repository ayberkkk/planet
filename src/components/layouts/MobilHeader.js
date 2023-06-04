import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <div className="circle rounded-circle mt-3">
        <span>planet</span>
      </div>
      <div className={`mobile-header ${isOpen ? "active" : ""}`}>
        <div className="menu-toggle" onClick={handleToggle}>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </div>
        <div className="menu-items">
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" onClick={handleToggle}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleToggle}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={handleToggle}>
                  Services
                </NavLink>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="/services/service1" onClick={handleToggle}>
                      Service 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/service2" onClick={handleToggle}>
                      Service 2
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleToggle}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default MobileHeader;
