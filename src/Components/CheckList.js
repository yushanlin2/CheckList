import React, { Component } from 'react';
import TodoItem from './TodoItem';

class CheckList extends Component {
  deleteItem(id){
    this.props.onDelete(id);
  }

  render() {
    let todoItems;
    if(this.props.items){
      todoItems = this.props.items.map(item => {
        return (
          <TodoItem onDelete={this.deleteItem.bind(this)} key={item.title} item={item} />
        );
      });
    }
    return (
      <div className="Items">
        <h3>To-Do Items</h3>
        {todoItems}
      </div>
    );
  }
}

CheckList.propTypes = {
  items: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default CheckList;
