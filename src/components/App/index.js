// @flow

import * as React from "react";

import Head from "../Head";
import {GlobalStyle} from "./styles";

type PropType = {
  children: React.Node,
  title: string,
  description: string,
  link: string
};

const App = (props: PropType) => {
  const {title, description, link} = props;

  return <>
    <GlobalStyle />
    <Head
      title={title}
      description={description}
      link={link}
    />
    {props.children}
  </>;
}

export default App;
