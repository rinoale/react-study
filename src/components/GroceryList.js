import React, { Component } from 'react';
import ListItem from './ListItem';

class GroceryItem extends Component {
  render() {
    return(
      <ul>
        <ListItem quantity="1" name="Bread" />
        <ListItem quantity="6" name="Eggs" />
        <ListItem quantity="2" name="Milk" />
      </ul>
    );
  }
}

export default GroceryItem;
