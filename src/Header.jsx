import React from "react";

const Header = () => {
  return (
    <div className="mb4">
      <div className="flex flex-row justify-between bg-dark-primary">
        <div className="flex flex-row justify-around items-center">
          <div className="f3 ma2 grow glow o-60 white pointer">something</div>
          <div className="f3 ma2 grow glow o-60 white pointer">something</div>
          <div className="f3 ma2 grow glow o-60 white pointer">something</div>
        </div>
        <div className="flex flex-row justify-around">
          <a href="#">
            <i className="fab fa-instagram fa-3x ma2 accent grow glow o-50 pointer" />
          </a>
          <a href="#">
            <i className="fab fa-facebook-f fa-3x ma2 accent grow glow o-50 pointer" />
          </a>
          <a href="#">
            <i className="fab fa-twitter fa-3x ma2 accent grow glow o-50 pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
