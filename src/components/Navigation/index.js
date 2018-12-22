// @flow

import React from "react";
import { Link } from 'gatsby';

import logo from "../../../content/assets/logo.svg";
import {NavContainer_} from './styles';

type PropType = {};

const Navigation = (props: PropType) => {
  return <NavContainer_>

    <div className="logoName">
      <Link to="/">مجتباست</Link>
    </div>
    <div>
      <ul>
        <li>
          <Link to="/">وبلاگ</Link>
        </li>
        <li>
          <a href="https://mojtabast.com/about" target="_blank" rel="noopener noreferrer">درباره</a>
        </li>
        <li>
          <a href="https://mojtabast.com">
            <img src={logo} alt="Mojtabast Logo" />
          </a>
        </li>
      </ul>
    </div>
  </NavContainer_>
}

export default Navigation;
