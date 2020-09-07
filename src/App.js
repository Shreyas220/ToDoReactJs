import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo'
class App extends Component {
 
  state = {
    todos: [
      {
        id: 1,
        title: 'Take trash',
        completed: false
      },
      {
        id: 2,
        title: 'Learn react',
        completed: false
      },
      {
        id: 3,
        title: 'complete react application ',
        completed: false
      },
    ]
  }
 
  //toggle complete
  markComplete= (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
}

delTodo = (id) =>{
  this.setState({todos: [...this.state.todos.filter(todo => todo.id!==id)]});
}

  render(){
   
      return (
        <div className="App">
          <div className="container">
          <Header/>
          <AddTodo/>
           <Todos todos = {this.state.todos} markComplete = {this.markComplete}  delTodo = {this.delTodo} /> 
           </div>
       </div>
      );
  }
}

export default App;
