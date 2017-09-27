import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { IndexLink, Link, browserHistory } from 'react-router'

export const HomeView = () => (
  <div>
      {browserHistory.push('/auth')}
  </div>

)

export default HomeView
