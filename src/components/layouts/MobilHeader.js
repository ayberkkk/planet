import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillPinMapFill, BsMailbox, BsTelephone } from "react-icons/bs";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`mobile-header ${isOpen ? "active" : ""}`}>
        <div className="menu-toggle" onClick={handleToggle}>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </div>
        <div className="menu-items">
          <div className="circle rounded-circle mt-3">
            <span>planet</span>
          </div>
          <div className="d-flex top">
            <a href="/login" className="btn sales w-100">
              Contact Sales
            </a>
            <a href="/login" className="btn login w-100">
              Login
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Products</NavLink>
              </li>
              <li>
                <NavLink to="/">Solutions</NavLink>
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
          <div className="border-h"></div>
          <div className="mobile-contact mt-5">
            <ul className="list-unstyled">
              <li>
                <NavLink exact to="/">
                  <BsFillPinMapFill />
                  <span className="ms-2 opacity-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    at varius diam. Aliquam erat volutpat.
                  </span>
                </NavLink>
              </li>
              <li>
                <a href="mailto:johndoe@gmail.com">
                  <BsMailbox />
                  <span className="ms-2 opacity-50">johndoe@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:05555555555">
                  <BsTelephone />
                  <span className="ms-2 opacity-50">05555555555</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
