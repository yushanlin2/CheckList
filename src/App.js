import React, { Component } from 'react';
import uuid from 'uuid';
import CheckList from './Components/CheckList';
import AddItem from './Components/AddItem';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
    }
  }

  
  getItems(){
    this.setState({items: [
      {
        id:uuid.v4(),
        title: 'Choose the location for Wedding.',
        category: 'Location'
      },
      {
        id:uuid.v4(),
        title: 'Book the restaurant for wedding food.',
        category: 'Food'
      }
      
    ]});
  }

  componentWillMount(){
    this.getItems();

  }

  componentDidMount(){

  }

  handleAddItem(item){
    let items = this.state.items;
    items.push(item);
    this.setState({items:items});
  }

  handleDeleteItem(id){
    let items = this.state.items;
    let index = items.findIndex(x => x.id === id);
    items.splice(index, 1);
    this.setState({items:items});
  }

  render() {
    return (
      <div className="App">
        <AddItem addItem={this.handleAddItem.bind(this)} />
        <CheckList items={this.state.items} onDelete={this.handleDeleteItem.bind(this)} />
      </div>
    );
  }
}


export default App;
