import React, { Component } from 'react';
import loading from './loading.svg';

export default class Spiner extends Component {
  render() {
    return (
      <div className='text-center color-primary my-3'>   <img className='my-3 ' src={loading} alt="loding" /></div>
    )
  }
}
