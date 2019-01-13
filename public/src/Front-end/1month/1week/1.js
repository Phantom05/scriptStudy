// var ans = confirm('오잉?');
// if(ans){
//   document.body.innerHTML="Hello world!"
// }else{
//   document.body.innerHTML='잘했썸'
// }

// alert('hello world!');
console.log('hello world!')
// document.getElementById('demo').innerHTML = "hehehe";
document.getElementById('demo').style.color = 'red';
document.getElementById('demo').style.display = 'none';
document.getElementById('demo').style.display = 'block';

// 변수 선언
var x, y, z;
x = 10;
y = 5;
z = 20;

if (x + y - z < 0) {
  console.log('hello')
} else {
  console.log('world')
}
console.log(x + y * z);

console.log("야~~ 배고프다~~ \" 붕어빵아 \"");

x = x + 1
x += 1
++x;
x++;

console.log(x);

var numType = 10;
var stringType = 'here';
var objType = { wow: "sleep" };

function sum(a, b) {//매개변수, 파라미터.
  return a + b;
}
sum(1, 2) // 아규먼트, 인자.
// ()
console.log(sum);


// var game = confirm('게임을 시작하시겠습니까?');

// if(game){
//   var ans = prompt('당신의 이름은 무었입니까?');
//   var an = imagin(ans,document.getElementById('demo'));
// }else{
//   document.body.innerHTML='다음 기회에...'
// }
// function imagin(t,b){
//   b.innerHTML ='이름:'+t
// }


// 
// var b = confirm('여자입니까?');
// if(b){
//   var a = prompt('브레이어 사이즈가 몇입니까?');
//   abc(a);
// }else{
//   document.body.innerHTML="남성은 안됩니다."
// }

// function abc(word){
//   if(word == '80c' || word == '75c'){
//     document.body.innerHTML = '당신의 사이즈는 '+word+"입니다. 빅사이즈 매장으로 가세요";
//   }else{
//     document.body.innerHTML = '작은 사이즈 매장으로 가세요.'
//   }
// }

var car = {
  type: "phantom",
  model: "tesla",
  price: "1,000,000",
  sayHello: function () {
    console.log(this.type);
    return "hello"
  }
};
function abbb() {
  console.log(this)
}
abbb()
console.log(car.sayHello()) // 닷노테이션
console.log('gagaga \r haha');


/**
 * 프로그래밍! - javascript
 * 객체지향 언어.
 * 
 */


var order = confirm('커피를 주문하시겠습니까?');
if (order) {
  var menu = {
    메뉴판: ['아메리카노', '카페모카', '아이스티', '엉덩이차'],
    아메리카노: 3300,
    카메모키: 3600,
    아이스티: 6200,
    엉덩이차: 9900,
  };
  var answer = prompt('메뉴는 ' + menu.메뉴판 + '가 있습니다.\n무엇을 주문하시겠습니까?');
  coffeFunc(answer, menu);
} else {
  alert('다음에 이용해 주세요.');
}
function coffeFunc(answer, menu) {
  if (menu[answer] !== undefined) {
    var coldAndZHot = confirm('주문하신 메뉴는 ' + answer + '이 맞습니까? \n 가격은 ' + menu[answer] + '입니다. 따듯한 음료를 원하시나요?');
    if (coldAndZHot) {
      alert('따듯한 음료로 준비해드리겠습니다.');
      return;
    }
    alert('차가운 음료로 준비해드리겠습니다.');
    return;
  }
  alert('메뉴를 확인해주세요.');
  return;
}


