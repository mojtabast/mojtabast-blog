// @flow

import React from "react";
import { Link } from 'gatsby';

import {FooterContainer_} from './styles';

type PropType = {};

const Footer = (props:PropType) => {
  return <FooterContainer_>
      <ul>
        <li>
          <Link to="/">وبلاگ</Link>
        </li>
        <li>
          <a href="https://github.com/mojtabast" target="_blank" rel="noopener noreferrer">گیت‌هاب</a>
        </li>
        <li>
          <a href="https://twitter.com/mojtabast_fa" target="_blank" rel="noopener noreferrer">توییتر</a>
        </li>
        <li>
          <a href="https://01.mojtabast.com/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a>
        </li>
      </ul>
  </FooterContainer_>
}

export default Footer;
