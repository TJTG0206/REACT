import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class router1 extends Component {
  render() {
    return (
      <>
        <h1>path='/'</h1>
        <h3>reactRouter</h3>
        <Link to={'/reactRouter2'}>reactRouter2</Link>
      </>
    )
  }
}

export default router1;