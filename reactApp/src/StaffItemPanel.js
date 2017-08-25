import React from 'react';
//import ReactDOM from 'react-dom';
import StaffItem from './StaffItem';

export default class StaffItemPanel extends React.Component{
	render(){
		let items = [];
		if( this.props.items.length===0 ){
			items.push(<tr>没有用户</tr>)
		}else{
			this.props.items.forEach((item)=>{
				items.push( <StaffItem key={item.key} item={item} /> )
			})
		}
		return (
			<table className="itemPanel">
				<thead>
					<tr>
						<th className="itemId">姓名</th>
						<th className="itemId">性别</th>
						<th className="itemId">年龄</th>
						<th className="itemId">身份</th>
						<th className="itemId">操作</th>
					</tr>
				</thead>
				<tbody>{items}</tbody>
				{/*数组能自动展开*/}
			</table>
		)
	}
}
