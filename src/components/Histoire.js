import React from 'react';

class Histoire extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <React.Fragment>
                <img src={require(`../assets/images/${this.props.image}`)} />
                <h1>{this.props.text}</h1>
             </React.Fragment>;
    }
  }

export default Histoire;