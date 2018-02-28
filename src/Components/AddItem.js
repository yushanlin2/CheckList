import React, { Component } from 'react';
import uuid from 'uuid';

class AddItem extends Component {
  constructor(){
    super();
    this.state = {
      newItem:{}
    }
  }

  static defaultProps = {
    categories: ['Location', 'Food', 'Dress']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('To-do item cannot be empty');
    } else {
      this.setState({newItem:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addItem(this.state.newItem);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add To-Do Items</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Content</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

AddItem.propTypes = {
  categories: React.PropTypes.array,
  addItem: React.PropTypes.func
}

export default AddItem;
