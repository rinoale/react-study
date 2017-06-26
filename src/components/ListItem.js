import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li>{this.props.quantity} x {this.props.children}</li>
    );
  }
}

export default ListItem;
