import * as React from 'react'

import Head from '../Head'
import { GlobalStyle } from './styles'

/**
 *  App PropTypes
 *
 *  @typedef  {Object} PropType
 *  @property {string} title
 *  @property {string} description
 *  @property {string} link
 *
 */

/**
 * @param {PropType} props - The magic number.
 */
const App = props => {
  const { title, description, link } = props

  return (
    <>
      <GlobalStyle />
      <Head title={title} description={description} link={link} />
      {props.children}
    </>
  )
}

export default App
