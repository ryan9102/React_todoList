import React, {Component} from "react";
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  state = {
    todos:[
      {id:'001',name:"Have Lunch", done:false},
      {id:'002',name:"Play game", done:false},
      {id:'003',name:"Coding", done:true},
    ]
  }

  addTodo = (todoObj)=>{
    const {todos} = this.state
    this.setState({todos:[todoObj,...todos]})
  }

  checkTodo =(id,done)=>{
    const {todos} = this.state
    const newTodos = todos.map((t)=>{
      if(t.id === id){
        return {...t,done}
      }else{
        return t
      }
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((t)=>{
      return t.id !== id
    })
    this.setState({todos:newTodos})
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
          <Footer/>
        </div>
  </div>
    )
  }
}

