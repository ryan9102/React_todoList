import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    handleKeyUp = (event)=>{
        const {key,target} = event
        if(key !== 'Enter') return
        
        const {value:name} = target
        const todoObj = {id:nanoid(),name:name,done:false}
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
        <div className="todo-header">
            <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
        )
    }
}
