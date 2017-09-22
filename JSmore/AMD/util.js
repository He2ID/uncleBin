define(function(){
	var util = {
		getFormatDate: function(date,type){
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			month = (month < 10)?('0' + month):(month);
			day = (day < 10)?('0' + day):(day);
			if(type == 1){
				return year + '-' + month + '-' + day;
			}
			if(type == 2){
				return year + '年' + month + '月' + day + '日';
			}
		}
	}
	return util;
})