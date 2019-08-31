console.log(
  Math.PI
)
//
console.log(
  Math.round(3.5)
)
//
console.log(
  Math.ceil(2.1)
)

console.log(
  Math.floor(2.9)
)

console.log(
  Math.pow(3,3)
)

console.log(
  Math.sqrt(81)
)

console.log(
  Math.abs(-124124124)
)

console.log(
  Math.random().toFixed(3)
)
console.log(
  Math.random().toPrecision(3)
)
console.log(
  Math.max(123,123,123,123,124)
)
console.clear();
// var food = ['피자','치킨','족발','샌드위치','돈까스'];
// setInterval(function(){
//   var date = new Date();
//   console.log(
//     `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
//   )
//   console.log(
//     food[Math.ceil(Math.random() * food.length-1)]
//   )
// },1000)


var opinion = false;
var rpsArr = ['가위','바위','보'];
for(;opinion;){
  opinion = confirm('가위바위보를 하시겠습니까?');
  
  if(opinion){
    var userAnwer = prompt(`${rpsArr}중에 선택 해주세요.`);
    var computer = rpsArr[Math.ceil(Math.random() * rpsArr.length -1)];
    var result = null;

    switch(userAnwer.trim()){
      case rpsArr[0]: { // 우리가 가위
        if(computer == '가위'){
          result = '비겼습니다!';
        }else if( computer == '보'){
          result = '이겼습니다 !!';
        }else if(computer == '바위'){
          result = '졌습니다 ㅠㅠ';
        }
      }
      break;

      case rpsArr[1]:{
        if(computer == '가위'){
          result = '이겼습니다. !!';
        }else if( computer == '보'){
          result = '졌습니다 ㅠㅠ';
        }else if(computer == '바위'){
          result = '비겼습니다!';
        }
      }
      break;

      case rpsArr[2]:{
        if(computer == '가위'){
          result = '졌습니다 ㅠㅠ';
        }else if( computer == '보'){
          result = '비겼습니다!';
        }else if(computer == '바위'){
          result = '이겼습니다!';
        }
      }
      break;
      default:  
    }
    var cAnswer = alert(`가위 바위 보! ${result} \n컴퓨터는 ${computer}을 냈습니다. \n자네의 선택은 ${userAnwer} 이라네.`);
    var again = confirm('다시한판 할래?');
    if(again){
      opinion = true;
    }else{
      opinion= false;
    }
  }
}

var a = 10;
var b = 'abc';

var c = {abc:10};
var a = 20;

console.log(
  'ssdf23sdg'.valueOf()
)


console.log(
  parseInt(500)
)

var  aa = new Array('abc, fff')
console.log(typeof aa)
var bb = new Function('a','return \na');

var numArr = [5,4,2,1117,4,7,2,9,2];
console.log(
  numArr.sort(((a,x)=>a-x))
);

var food = ['피자','짜장면','탕수육','짬뽕','군만두','복음밥','마파두부'];

food.forEach(function(x){
  console.log(x)
})

console.clear();
food.push('푸시 베이베');
console.log(food)

console.log(
  food.join(' | ').split(' | ')
)

var phone ='010-1234-5678';
console.log(
  phone.split('-')
);

food.pop();
console.log(food)

console.clear();
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(
  fruits
)
console.log(
  fruits.splice(2,1)
)
console.log(
  fruits.splice(2, 2, "Lemon", "Kiwi",'자장면','탕수육','베고프다.')
)
console.log(
  fruits
)

var abc1 = ['배가'];
var abc2 = ['고파'];
var abc3 = ['마니마니']
var abc4 = abc1.concat(abc2,abc3)

console.clear();


var coffeList = {
  list:['아메리카노','카푸치노'],
  아메리카노:3300,
  카푸치노:2800
};
document.getElementById('coffeeBt').addEventListener('click',function(){
  var cAnswer = confirm('커피를 주문하시겠습니까?');
  if(cAnswer){
    list = prompt(`주문 가능한 커피는 ${coffeList.list} 가 있습니다. 무었을 주문하시겠습니까?`);
    if(coffeList[list]){
      var tem = confirm(`주문하신 커피는 ${list}입니다. 가격은 ${coffeList[list]} 입니다. 따듯한 음료로 드릴까요?`);
      if(tem){
        alert('따듯한 음료로 준비해 드리겠습니다. 잠시만 기다려주세요.')
      }else{
        alert('차가운 음료로 준비해 드리겠습니다. 잠시만 기다려주세요.')
      }
    }else{
      alert('그런 메뉴는 없습니다. 메뉴를 확인해주세요.')
    }

  }
  
})
