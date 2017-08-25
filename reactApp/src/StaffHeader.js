import React from 'react';
import ReactDOM from 'react-dom';

export default class StaffHeader extends React.Component{
	//
	handleSearch(){
		let bar = ReactDOM.findDOMNode(this.refs.searchBar);
		//用App searchStaff方法 将搜索关键字
		this.props.searchStaff(bar.value);
	} 
	render(){
		return (
			<div style={{'textAlign':'center'}}>
				<h3 style={{'textAlign':'center'}}>{this.props.names}学生管理系统</h3>
				<table className="optHeader">
					<tbody>
						<tr>
							<td>
								{/* input改变 */}
								<input type="text" ref="searchBar" onChange={this.handleSearch.bind(this)} placeholder="名字" />
							</td>
							<td>
								<label>人员筛选</label>
								<select id='idSelect'>
		                            <option value='0'>全部</option>
		                            <option value='1'>主任</option>
		                            <option value='2'>老师</option>
		                            <option value='3'>学生</option>
		                            <option value='4'>实习</option>
		                        </select>
							</td>
							<td>
								<label>排序方式</label>
								<select id='orderSelect'>
		                            <option value='0'>默认</option>
		                            <option value='1'>升序</option>
		                            <option value='2'>降序</option>
		                        </select>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}