import React,{Component} from 'react';//?
import StaffHeader from './StaffHeader';
import StaffItemPanel from './StaffItemPanel';
import StaffFooter from './StaffFooter';

var rawData = [
					{ info: {descrip:'我个子中等，1，66，再班里排第十个，长脸短鼻子，手大脚也大', sex: '男', age: 20, name: '徐晨曦', id: '主任'}},
					{ info: {descrip:'人性格开朗、稳重、有活力，待人热情、真诚；', sex: '女', age: 21, name: '秦婷婷', id: '学生'}},
					{ info: {descrip:'本人是XX专业毕业生，熟练手绘，熟练cad,3dmax,vray,photoshop等设计软件，', sex: '女', age: 22, name: '曹丽娜', id: '学生'}},
					{ info: {descrip:'我虽刚刚毕业，但我年轻，有朝气，有能力完成任何工作。', sex: '女', age: 24, name: '王官君', id: '实习'}},
					{ info: {descrip:'我叫WLB，应用化学专业的，所以口才不如营销专业同学的好，说的不好的地方请大家多多包含。', sex: '男', age: 23, name: '王红梅', id: '实习'}},
					{ info: {descrip:'我个性随和，平易近人。而且向来坚持“多动脑，少废事”的个人处事原则。', sex: '男', age: 22, name: '郭淑慧', id: '学生'}},
					{ info: {descrip:'我是***，所学的是国际政治专业,四年的大学生活是我人生的关键点。', sex: '男', age: 24, name: '马海娟', id: '主任'}},
					{ info: {descrip:'我不固守书面理论，尽力尝试理论与实践相结合，以实践印证理论，以理论指导实践。', sex: '男', age: 35, name: '倪辰曦', id: '老师'}},
					{ info: {descrip:'我是来自广西大学会记专业的应届毕业生。', sex: '男', age: 42, name: '范志坚', id: '学生'}},
					{ info: {descrip:'大学时期，我担任过班长，系学生会干事，具有很强的组织和协调才能', sex: '男', age: 50, name: '安瑞娟', id: '实习'}},
					{ info: {descrip:'我是一个来自于广东汕头市某个农村的孩子,今年20岁', sex: '男', age: 60, name: '陈逸群', id: '实习'}}
              ];

//生成模块
class App extends Component{
	render(){
		return(
			<div>
				<StaffHeader names="Alex"/>
				<StaffItemPanel items={rawData}/>
				<StaffFooter />
			</div>
		)
	}
}
export default App;