import React, { Component } from 'react';
import { render } from '@testing-library/react';

class Typewriter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      charArray: [],
      counter: 0
    }
  }
  
  render() {
    return this.state.charArray
  }
}

export default Typewriter;