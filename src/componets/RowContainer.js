import React, { Component } from 'react';

class RowContainer extends Component {
  render() {
    return (
      <div className="row" >
        {this.props.objectArray}
      </div>);
  }
}

export { RowContainer }