import React from 'react';
import ReactDOM from 'react-dom';

export default class StaffFooter extends React.Component{
	handlerAddClick(e){
		//阻止默认事件
		e.preventDefault();
		//form数据存入item对象
		let item = {};
		//找DOM节点
		let addForm = ReactDOM.findDOMNode(this.refs.addForm);
		let sex = addForm.querySelector('#staffAddSex');
		let id = addForm.querySelector('#staffAddId'); 
		//对象保持同一层级 存值
		item.info = {};
		item.info.sex = sex.options[sex.selectedIndex].value;
		item.info.id = id.options[id.selectedIndex].value;
		item.info.name = addForm.querySelector('#staffAddName').value;
		item.info.age = addForm.querySelector('#staffAddAge').value;
		item.info.descrip = addForm.querySelector('#staffAddDescrip').value;
		//使用App StaffFooter 传入addStaffItem方法 用于传递更新的人员信息
		this.props.addStaffItem(item);
		//form表单恢复默认空白状态
		addForm.reset();
	}
	render(){
		return (
			<div>
				<h4 style={{'textAlign':'center'}}>新增人员</h4>
				<form ref='addForm' className='addForm'>
					<div className='formstyle'>
						<ul>
							<li>
								<label htmlFor='staffAddName' style={{'display': 'block'}}>姓名</label>
								<input ref='addName' id='staffAddName' type='text' placeholder='Your Name'/>
							</li>
							<li>
								<label htmlFor='staffAddAge' style={{'display': 'block'}}>年龄</label>
								<input ref='addAge' id='staffAddAge' type='text' placeholder='Your age'/>
							</li>							
							<li>
								<label htmlFor='staffAddSex' style={{'display': 'block'}}>性别</label>
								<select ref='addSex' id='staffAddSex'>
									<option value='男'>男</option>
									<option value='女'>女</option>
								</select>
							</li>
							<li>
								<label htmlFor='staffAddId' style={{'display': 'block'}}>身份</label>
								<select ref='addId' id='staffAddId'>
									<option value='主任'>主任</option>
									<option value='老师'>老师</option>
									<option value='学生'>学生</option>
									<option value='实习'>实习</option>
								</select>
							</li>
							<li>
								<label htmlFor='staffAddDescrip' style={{'display': 'block'}}>个人描述</label>
								<textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
							</li>
							<p ref="tips" className='tips' >提交成功</p>
							<p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
							<p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
							<li>
								<button onClick={this.handlerAddClick.bind(this)}>提交</button>
							</li>
						</ul>
					</div>
				</form>
			</div>
		)
	}
}