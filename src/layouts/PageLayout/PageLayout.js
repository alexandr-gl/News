import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
      {' · '}
      <Link to='/content' activeClassName='page-layout__nav-item--active'>Content</Link>
      {' · '}
      <Link to='/somekey' activeClassName='page-layout__nav-item--active'> Add News </Link>
      {' · '}
      <Link to='/auth' activeClassName='page-layout__nav-item--active'> Sign up </Link>
      {' · '}
      <Link to='/login' activeClassName='page-layout__nav-item--active'> Log In</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
