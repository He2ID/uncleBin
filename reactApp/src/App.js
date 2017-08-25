import React,{Component} from 'react';//解构方式引入模块
import StaffHeader from './StaffHeader';
import StaffItemPanel from './StaffItemPanel';
import StaffFooter from './StaffFooter';
import Staff from './STAFF';



//生成模块
class App extends Component{
	constructor(){
		super();
		this.state = {
			staff : new Staff()
		}
	}
	//增加 接收新增数据的对象
	addStaffItem(item){
		this.setState({
			//调用STAFF addStaffItem方法
			staff:this.state.staff.addStaffItem(item)
		})
	}
	//搜索
	searchStaff(word){
		this.setState({
			//调用STAFF searchStaff方法
			staff:this.state.staff.searchStaff(word)
		});
	}
	render(){
		return(
			<div>
				<StaffHeader searchStaff={this.searchStaff.bind(this)} names="Alex"/>
			{/* 方法传递到headerer */}
				<StaffItemPanel items={this.state.staff.staff}/>
				<StaffFooter addStaffItem={this.addStaffItem.bind(this)} />
				{/* 方法传递到footer */}
			</div>
		)
	}
}
export default App;