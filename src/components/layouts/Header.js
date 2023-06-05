import React, { useState } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import MobileHeader from "./MobilHeader";

const Header = () => {
  const [subMenuStates, setSubMenuStates] = useState({});

  const handleMouseEnter = (id) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [id]: { isOpen: true, isHovered: true },
    }));
  };

  const handleMouseLeave = (id) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], isHovered: false },
    }));
    setTimeout(() => {
      if (!subMenuStates[id].isHovered) {
        setSubMenuStates((prevState) => ({
          ...prevState,
          [id]: { ...prevState[id], isOpen: false },
        }));
      }
    }, 200);
  };

  const handleMobileSubMenuToggle = (id) => {
    setSubMenuStates((prevState) => ({
      ...prevState,
      [id]: { isOpen: !prevState[id]?.isOpen },
    }));
  };

  const isSubMenuOpen = (id) => {
    return subMenuStates[id] && subMenuStates[id].isOpen;
  };

  const isHovered = (id) => {
    return subMenuStates[id] && subMenuStates[id].isHovered;
  };

  return (
    <header className="sticky-top">
      <Container fluid>
      <div className="circle rounded-circle mt-3 mobile-logo">
        <span>planet</span>
      </div>
        <div className="desktop-menu">
          <div className="d-flex align-content-center justify-content-end top">
            <a href="/login" className="btn sales">
              Contact Sales
            </a>
            <a href="/login" className="btn login">
              Login
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center bottom">
            <div className="circle rounded-circle">
              <span>planet</span>
            </div>
            <div className="menu">
              <nav>
                <ul className="d-flex align-items-center list-unstyled mb-0">
                  <li
                    onMouseEnter={() => handleMouseEnter("products")}
                    onMouseLeave={() => handleMouseLeave("products")}
                    onClick={() => handleMobileSubMenuToggle("products")}
                  >
                    <NavLink to="/">Products</NavLink>
                    {(isSubMenuOpen("products") || isHovered("products")) && (
                      <div
                        className={`sub-menu ${
                          isSubMenuOpen("products") && isHovered("products")
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="w-100">
                          <p>Global Monitoring, Daily Insight</p>
                        </div>
                        <div className="d-flex flex-wrap">
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleMouseEnter("solutions")}
                    onMouseLeave={() => handleMouseLeave("solutions")}
                    onClick={() => handleMobileSubMenuToggle("solutions")}
                  >
                    <NavLink to="/">Solutions</NavLink>
                    {(isSubMenuOpen("solutions") || isHovered("solutions")) && (
                      <div
                        className={`sub-menu ${
                          isSubMenuOpen("solutions") && isHovered("solutions")
                            ? "active"
                            : ""
                        }`}
                      >
                        <div className="w-100">
                          <p>Global Monitoring, Daily Insight</p>
                        </div>
                        <div className="d-flex flex-wrap">
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                          <div className="sub-div">
                            <p className="sub-item">Planet Monitoring</p>
                            <span className="sub-title">
                              High frequency, global coverage
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <NavLink to="/">Partners</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Investors</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Company</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Gallery</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <>
          <MobileHeader/>
        </>
      </Container>
    </header>
  );
};

export default Header;
