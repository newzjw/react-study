import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'

export default class Add extends Component {
  contentRef = React.createRef()
  nameRef = React.createRef()
  add = () => {
    let {addComment} = this.props
    // 获取用户输入
    let name = this.nameRef.current.value
    let content = this.contentRef.current.value
    //2.校验数据
    if(!name.trim() || !content.trim()){
      alert('名字和评论内容均不能为空！')
      return
    }
    //3.将输入的数据维护到状态中
    addComment({id:uuid(),name,content})
    //4.清空输入
    this.nameRef.current.value = ''
    this.contentRef.current.value = ''
  }
  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={this.nameRef} />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref={this.contentRef}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}