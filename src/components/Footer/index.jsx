import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleAllDone=(event)=>{
    const {checkAllDone} = this.props
    checkAllDone(event.target.checked)
  }

  clearAllDone=()=>{
    this.props.clear()
  }

    render() {
      const {todos} = this.props
      const total = todos.length
      const doneTotal = todos.reduce((preValue,current)=>{return preValue + (current.done?1:0)},0)
        return (
            <div className="todo-footer">
            <label>
              <input type="checkbox" onChange = {this.handleAllDone} checked={total === doneTotal && total !== 0 ? true: false}/>
            </label>
            <span>
              <span>已完成{doneTotal}</span> / 全部{total}
            </span>
            <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
          </div>
        )
    }
}
