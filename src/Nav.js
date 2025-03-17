import React, { useState, useEffect }  from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="netflix logo"
          width="100"
          height="50"
          onClick={() => history("/home")}
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          width="100"
          height="50"
          onClick={() => history("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
