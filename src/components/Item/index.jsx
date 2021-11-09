import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  handleCheck = (id)=>{
    return (event)=>{
      this.props.checkTodo(id,event.target.checked)
    }
  }

    render() {
      const {id,name,done} = this.props
      
        return (
            <li>
            <label>
              <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
              <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display:'none'}}>删除</button>
          </li>
        )
    }
}
