function convert(num) {
  if(num===0) return "0 is not exist in ROME Numerals";
  var digitArr=[1,10,100,1000];
  //num拆分成和 eg.1234=1000+200+30+4
  var numDigit = digit(num);//num是几位数
  var arrNum=[];//存储各个加数
  arrNum[0]=parseInt(num/1000)*1000;
  arrNum[1]=parseInt((num-arrNum[0])/100)*100;
  arrNum[2]=parseInt((num-arrNum[0]-arrNum[1])/10)*10;
  arrNum[3]=num-arrNum[0]-arrNum[1]-arrNum[2];
  //各个加数罗马换算 并罗马相加
  var arrRomeNum=[];//最后结果存储
  //var ROME1 = toRome(2000);//MMM
  //var ROME2 = toRome(0);//0
  for(var i=0;i<arrNum.length;i++){
    var d = toRome(arrNum[i]);
    if(d!==0){
     arrRomeNum.push(d); 
    }
    d=0;
  }
  return arrRomeNum.join("");

  //计算位数
  function digit(num){
    var d = 1;
    var i = 0;
    while(num/d >= 1){
      d = d * 10;
      i++;
    }   
    return i;
  }  
  //单个加数转换为罗马值 a为传入数字
  function toRome(a){
    if(a===0) return 0;
    var RSymbol=["I","V","X","L","C","D","M"];
    var m = digit(a);//m ———— a是几位数
    var aTop = a/digitArr[m-1];
    m = (m-1) * 2;
    var R1=RSymbol[0 + m];
    var R2=RSymbol[1 + m];
    var R3=RSymbol[2 + m];
    var b=0;
    switch(aTop){
      case 1:b = R1;break;
      case 2:b = R1 + R1;break;
      case 3:b = R1 + R1 + R1;break;
      case 4:b = R1 + R2 ;break;
      case 5:b = R2;break;
      case 6:b = R2 + R1;break;    
      case 7:b = R2 + R1 + R1;break;
      case 8:b = R2 + R1 + R1 + R1;break;
      case 9:b = R1 + R3;break;
    }   
    return b;
  }
}
convert(0);
