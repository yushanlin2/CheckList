import React, { Component } from 'react';

class TodoItem extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Items">
        <strong>{this.props.item.category}</strong>: {this.props.item.title} <a href="#" onClick={this.deleteItem.bind(this, this.props.item.id)}>X</a>
      </li>
    );
  }
}

TodoItem.propTypes = {
  item: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default TodoItem;
