import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="mb4">
      <div className="flex flex-row justify-between bg-dark-primary">
        <div className="flex flex-row justify-around items-center">
          <Link to="/" className="f3 ma2 grow glow o-60 white pointer">Home</Link>
          <Link to="/Todo" className="f3 ma2 grow glow o-60 white pointer">Todo</Link>
          <Link to="/Kanbaan" className="f3 ma2 grow glow o-60 white pointer">Kanbaan</Link>
        </div>
        <div className="flex flex-row justify-around">
          <Link to="/">
            <i className="fab fa-instagram fa-3x ma2 accent grow glow o-50 pointer" />
          </Link>
          <Link to="/">
            <i className="fab fa-facebook-f fa-3x ma2 accent grow glow o-50 pointer" />
          </Link>
          <Link to="/">
            <i className="fab fa-twitter fa-3x ma2 accent grow glow o-50 pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
