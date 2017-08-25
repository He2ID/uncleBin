class staffItem{
	constructor(item){
		this.info={};
		this.info.name=item.info.name;
		this.info.age=item.info.age||0;
		this.info.sex=item.info.sex;
		this.info.id=item.info.id;
		this.info.descrip=item.info.descrip||'';
		this.key=++staffItem.key;
	}
}
staffItem.key = 0;
export default class STAFF{
	constructor(){
		this.allStaff = [
			new staffItem(STAFF.rawData[0]),
			new staffItem(STAFF.rawData[1]),
			new staffItem(STAFF.rawData[2]),
			new staffItem(STAFF.rawData[3]),
			new staffItem(STAFF.rawData[4]),
			new staffItem(STAFF.rawData[5]),
			new staffItem(STAFF.rawData[6]),
			new staffItem(STAFF.rawData[7]),
			new staffItem(STAFF.rawData[8]),
			new staffItem(STAFF.rawData[9]),
			new staffItem(STAFF.rawData[10])
		];
		this.staff = this.allStaff;
		this.word = '';// search关键字
	}
	//加
	addStaffItem(item){
		//staffItem 新建人员信息实例
		//console.log(this);
		let newItem = new staffItem(item);
		this.allStaff.push(newItem);
		//返回所有item
		console.log(this);
		return this;
	}
	//搜索
	searchStaff(word){
		this.word = word;
		//this.staff 存所有人员数据
		this.staff = this.allStaff;
		//console.log(this.staff);
		//staff中搜索 返回过滤后数据存在this.staff
		this.staff=this.staff.filter(function(item){
			return item.info.name.indexOf(word)!==-1||
					item.info.id.indexOf(word)!==-1||
					item.info.sex.indexOf(word)!==-1||
					(item.info.age+'').indexOf(word)!==-1;
		});
		return this;
	}
}
//假数据
STAFF.rawData = [
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