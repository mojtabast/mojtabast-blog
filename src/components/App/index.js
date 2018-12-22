// @flow

import * as React from "react";

import Head from "../Head";
import {GlobalStyle} from "./styles";

type PropType = {
  children: React.Node
};

const App = (props: PropType) => {

  return <>
    <GlobalStyle />
    <Head />
    {props.children}
  </>;
}

export default App;
