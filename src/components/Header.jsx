import React from "react";

import logo_w from "../assets/img/logo2.svg";
import arrow from "../assets/img/icon_news_arrow.png";

const Header = () => {
  return (
    <nav id="navigation">
      <header className="header">
        <div className="cursor">
          <span className="text">Here we go!</span>
        </div>
        <h1 className="header__logo">
          <a href="#!" aria-current="page" className="">
            <div className="header__logodraw">
              <img src={logo_w} alt="로고" />
            </div>
          </a>
        </h1>
        <button className="header__menu-button">
          <em className="blind">메뉴 버튼</em>
          <div className="menu-button-shape">
            <span></span>
            <span></span>
          </div>
        </button>
      </header>
      <div className="side-area active">
        <nav className="side-wrap" role="navigation">
          <ul className="list-gnb">
            <li className="gnb-item">
              <a href="/">
                <b>Intro</b>
              </a>
            </li>
            <li className="gnb-item">
              <a href="/sub/class.php">
                <b>Growth</b>
              </a>
            </li>
            <li className="gnb-item">
              <a href="/portfolio/">
                <b>Will be</b>
              </a>
            </li>
            <li className="gnb-item">
              <a href="/sub/company.php">
                <b>Thanks to</b>
              </a>
            </li>
          </ul>
        </nav>
        {/* <a href="#!" className="close">
          <div className="menu-button-shape">
            <span></span>
            <span></span>
          </div>
          <span className="blind">닫기</span>
        </a> */}
        <a href="#!" class="close">
          <span class="blind">닫기</span>
        </a>
      </div>
      <div className="nav-footer">
        <ul className="nav-footer__links"></ul>
        <p className="copyright">ⓒ Posey. All rights reserved.</p>
      </div>

      <div className="main-contents" tabindex="0">
        <div className="main-slider__header">
          <a href="/">
            <div className="block-text">
              <div className="block-text__line">
                <span className="block-text__word">
                  <span className="mask-text">
                    <img src={arrow} alt="" />
                    <span style={{ animationDelay: "0ms" }}>Intro &nbsp;</span>
                  </span>
                </span>
              </div>
              <div className="block-text__line">
                <span className="block-text__word">
                  <span className="mask-text">
                    <img src={arrow} alt="" />
                    <span style={{ animationDelay: "80ms" }}>
                      Growth &nbsp;
                    </span>
                  </span>
                </span>
              </div>
              <div className="block-text__line">
                <span className="block-text__word">
                  <span className="mask-text">
                    <img src={arrow} alt="" />
                    <span style={{ animationDelay: "160ms" }}>
                      Will be &nbsp;
                    </span>
                  </span>
                </span>
              </div>
              <div className="block-text__line">
                <span className="block-text__word">
                  <span className="mask-text">
                    <img src={arrow} alt="" />
                    <span style={{ animationDelay: "240ms" }}>
                      Thanks to &nbsp;
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
