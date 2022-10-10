import React from 'react';
import Letter from './Letter';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

class Title extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        redLetters: this.props.text.length -  this.props.text.split(' ').length
      }
    }

    changeRedLettersValue(newValue) {
      if (newValue == 'green') this.setState({redLetters: this.state.redLetters-1});
      else if (newValue == 'red') this.setState({redLetters: this.state.redLetters+1});

      console.log("number of red letters : ", this.state.redLetters);

      if (this.state.redLetters == 0) {
          console.log("C'est bon !!");
          window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }
    }

    render() {
      return this.props.text.split('').map(element => <Letter letter={element} class={'red'} changeRedLettersValue={this.changeRedLettersValue.bind(this)} />);
    }
  }

export default Title;