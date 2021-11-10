import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouseIn:false
  }

  handleCheck = (id)=>{
    return (event)=>{
      this.props.checkTodo(id,event.target.checked)
      }
  }

  handleMouseIn=()=>{
      this.setState({mouseIn:true})
  }
  handleMouseLeave=()=>{
    this.setState({mouseIn:false})
}

    render() {
      const {id,name,done} = this.props
      const{mouseIn}= this.state
      
        return (
            <li style={{backgroundColor:mouseIn? '#ddd':'white'}} onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseLeave}>
            <label>
              <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
              <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display: mouseIn? 'block' : 'none'}}>删除</button>
          </li>
        )
    }
}
