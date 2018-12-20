import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Linkage = styled(Link)`
  &&& {
    margin: 10px;
    padding: 8px;
    height: 30px;
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
    background-color: #0290ff;
    border: solid 1px #0290ff;
    border-radius: 2px;
    background-color: #0290ff;

    @media only screen and (max-width: 480px) {
      font-size: 0.5rem;
      margin: 6px;
      padding: 4px;
      height: 20px;
    }
  }
`

const NavLink = ({ children, ...rest }) => (
  <Linkage {...rest}>{children}</Linkage>
)

export default NavLink
