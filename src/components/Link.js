import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  margin: '10px',
  padding: '8px',
  height: '30px',
  textDecoration: 'none',
  color: '#fff',
  fontSize: '1.25rem',
  backgroundColor: '#0290ff',
  border: 'solid 1px #0290ff',
  borderRadius: '2px'
}

const NavLink = ({ children, ...rest }) => (
  <Link style={styles} {...rest}>
    {children}
  </Link>
)

export default NavLink
