import React from 'react'

import logo_w from '../assets/img/logo2.svg';
import arrow from '../assets/img/icon_news_arrow.png';

const Header = () => {
  return (
    <nav id="navigation">
      <header class="header">
        <div class="cursor">
          <span class="text">Here we go!</span>
        </div>
        <h1 class="header__logo">
          <a href="/public/index.html" aria-current="page" class="">
            <div class="header__logodraw">
              <img src={logo_w} alt="로고" />
            </div>
          </a>
        </h1>
        <button class="header__menu-button">
          <em class="blind">메뉴 버튼</em>
          <div class="menu-button-shape">
            <span></span>
            <span></span>
          </div>
        </button>
      </header>
      <div class="mobile__wrap">
        <div class="layout">
          <div class="mobile__menu">
            <ul>
              <li><a href="#!">Intro</a></li>
              <li><a href="#!">Growth</a></li>
              <li><a href="#!">Will be</a></li>
              <li><a href="#!">Thanks to</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav-footer">
          <ul class="nav-footer__links"></ul>
          <p class="copyright">ⓒ Posey. All rights reserved.</p>
      </div>

      <div class="main-contents" tabindex="0">
          <div class="main-slider__header">
            <a href="/">
              <div class="block-text">
                <div class="block-text__line">
                  <span class="block-text__word">
                    <span class="mask-text">
                      <img src={arrow} alt="" />
                      <span style={{animationDelay: '0ms'}}>Intro &nbsp;</span>
                    </span>
                  </span>
                </div>
                <div class="block-text__line">
                  <span class="block-text__word">
                    <span class="mask-text">
                      <img src={arrow} alt="" />
                      <span style={{animationDelay: '80ms'}}>Growth &nbsp;</span>
                    </span>
                  </span>
                </div>
                <div class="block-text__line">
                  <span class="block-text__word">
                    <span class="mask-text">
                      <img src={arrow} alt="" />
                      <span style={{animationDelay: '160ms'}}>Will be &nbsp;</span>
                    </span>
                  </span>
                </div>
                <div class="block-text__line">
                  <span class="block-text__word">
                    <span class="mask-text">
                      <img src={arrow} alt="" />
                      <span style={{animationDelay: '240ms'}}>Thanks to &nbsp;</span>
                    </span>
                  </span>
                </div>
              </div>
            </a>
          </div>
      </div>
    </nav>
  )
}

export default Header
