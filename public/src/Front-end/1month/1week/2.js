
// var abc = document.getElementById('title');
// abc.textContent='hello';
// let a = document.getElementById('res');
// a.append(abc);
// for(let i = 0 ;i < document.getElementsByClassName('list').length; i++ ){
//   if(i == 1){
//     console.log(
//       document.getElementsByClassName('list')[i].classList.add('test')
//     )
//   }
// }

var 뚠뚠 = 87;
if(typeof 뚠뚠 === 'string'){
  console.log('alright')
  console.log(typeof 뚠뚠)
}
else if(typeof 뚠뚠 === 'number'){
  console.log('number');
  console.log(typeof 뚠뚠)
}
else if(typeof 뚠뚠 === 'undefined'){
  console.log('unbelivable')
}
console.clear()

class kiziDate{
  constructor(set){
    this.year = 2019;
    this.month = '0'+1;
  }
  getYear(){
    return this.year
  }
  getMonth(){
    return this.month
  }
}



function insertDivContent(tar,el,content,fr){
  let arg = [...arguments];
  if(arg.length > 3){
    console.log(...arguments)
    for(let i = 0 ;i <fr; i++){
      let insertEl = document.createElement(el);
      insertEl.innerHTML = content;
      tar.append(insertEl);
    }
    return;
  }
  let insertEl = document.createElement(el);
  insertEl.innerHTML = content;
  tar.append(insertEl);
}
insertDivContent(document.getElementById('res1'),'span','Insert Element');
insertDivContent(document.getElementById('res2'),'h1','고객리스트');
insertDivContent(document.getElementById('res3'),'div','고객리스트',10);

let dataarr = ['VIP 고객님','서민 고객님','중민 고객님','상인 고객님','본부장 아들'];
for(let i =0; i< dataarr.length; i++){
  insertDivContent(document.getElementById('res2'),'div',dataarr[i]);
}

function getNunRange(n,r){
  if(n >= r){
    return 'Success';
  }else {
    return 'Fail!';
  }
}

console.log(getNunRange(100,5))


function getText(text){
  return `받은 텍스트는 ${text} 입니다. `
}

function doCal(n1,n2){
  return `두 수의 합은 ${n1+n2} 입니다.`
}
console.log(doCal(2000,1204));

console.log(
  getText('커피숍')
);


let newObj ={
  name:'new Object',
  arr:['food','game','coding'],
  test(t){
    return `name : ${this.name}, arr target : ${this.arr[t]}`;
  }
}

function abc(){
  console.log(this);
}
abc()

console.log(
  newObj.test(2)
)



let date1 =  new kiziDate();


console.log(
  date1.getYear()+'-'+date1.getMonth()
)


let nowYears = new Date();
nowYears.abc = 'hello';
nowYears.name = '육성재';
console.log(nowYears.getFullYear());
console.dir(nowYears);


function getAbc(t){
  console.log('abc');
  return 'abc';
}

var txt ='wejwrgjenrgergnergjnergjjergoj';
var txt1 = new String('afafafafaf');
console.log(txt.length);
console.log(txt1);
console.dir(String);

let kiziString ={
  length: 4
}
console.log(kiziString.length);

let txt2 ='Hello world Hello programming!';
console.log()
let sli = txt2.indexOf('Hello',8);
console.log(sli);

let ttt1 = "Wow, Fantastic Baby!";
console.log(ttt1.slice(5,14)); // 천번째인자 이상, 두번째인자 미만 까지 자름, start, end

let ttt2 ="Wow, Fantastic Baby!";
console.log(ttt2.substring(5,10));
console.log(ttt2);





console.group('요일');
console.log('토요일');
console.log('일요일');
console.groupEnd();
console.log('수요일')
console.group('음식');
console.log('피자');
console.log('김밥');

console.group('음료');
console.log('콜라');
console.groupEnd();
console.groupEnd();

//오늘 작업 할것.
console.clear();

var tg = document.getElementById('demoa').innerHTML = '야야양';

document.getElementById('demoa').style.color = 'red';

function doTypeCheck(a){
  if(typeof a =='string'){
    return yaho(a, typeof a)
  }else if (typeof a == 'function'){
    return yaho(a, typeof a)
  }else if (typeof a =='object'){
    return yaho(a, typeof a)
  }else if (typeof a == 'array'){
    return yaho(a, typeof a)
  }
}
function yaho(x,type){
  return `${x} is ${type}!`
}

console.log(
  doTypeCheck('sg')
)
console.log(
  doTypeCheck(function(){})
)
console.log(
  doTypeCheck({foo:'bar'})
)

function ggg(a){
  console.group('ggg function');
  console.groupEnd()
  return ccc(a);
}
function ccc(n){
  console.group('ccc function')
  console.log(n+'^')
  console.groupEnd();
}

ggg(3333);


var i = 0
for(; i< 10; i++){
  console.log(i);

}

console.clear();


var x = 123.12;
console.log(
  x.valueOf()
)
console.log();
for(var i = 0 ; i< 20; i+=2){
  if(i != 0){
    console.log(i)
  }
}
console.clear();

// for(var i = 0 ; i < 10; i ++){
//   console.log(`${2} x ${i} = ${2*i}`)
// };

// function ggd(s,i){
//   console.group(`${s} 단 :`)
//   for(;i <10;i++){
//     console.log(`${s} x ${i} = ${s*i}`)
//   }
//   console.groupEnd()
// }

// ggd(2,1);
// ggd(3,1);

console.group('parent')
for(var i = 0 ; i < 10; i ++){
  console.log('p for');
  console.group('son');
  for(var j = 0 ; j<10; j++){
    console.log('s for');
  }
  console.groupEnd();
}
console.groupEnd();

console.clear();
console.group('구구단')
for(var i = 0 ; i  < 10; i ++){
  if(i <2) continue;
  console.group(`${i}단 : `);
  for(var j = 0 ; j < 10; j ++){
    if(j <2) continue;
    console.log(`${i} x ${j} = ${i * j }`)
  }
  console.groupEnd() 
}
console.groupEnd();


for(var p = 0 ; p <= 10; p++){
  if(p<=5){
    console.log('5이하');
    continue;
  }else{
  }
  console.log('5이상');
}

var g = 0;
do{
  console.log('do',g)
  g+=1;
}while(g < 10){
  console.log('while',g)
  console.log('난 한번만 사용된다.')
}

console.clear();

var g = 0;
while(g < 30){  
  // if(g <= 0) continue;
  console.log('g',g);
  g+=3;
};

document.getElementById('bbForm').addEventListener('click',function(e){
  e.preventDefault();
});

document.getElementById('ggBt').addEventListener('click',function(){
  var dan = ggValue.value;
  var res = document.getElementById('ggRes');
  res.innerHTML ='';
  for(var i = 0 ; i < 10; i ++){
    if(i <1) continue;
    res.innerHTML +=`</p>${dan} x ${i} = ${dan*i}</p>`;
  };
});

console.clear();

var abc = [1,2,3,4,5];
console.log(
  abc.filter(x=>{
    return x%2 ==0
  })
)

console.log(
  abc.reduceRight((x,y)=>{
    return x+y
  })
)

console.log(
  abc.every(x=>x>3)
)

console.log(
  abc.find(x=> x>2)
);


for(let i =1; i <=10; i++){
  console.group(`${i}`)
    for(let j = 0 ;j < 1; j++){
      console.group(`${i-1}`);
        for(let k = 0 ; k <1 ; k ++){
          console.group(`${i-2}`)
          console.groupEnd()
        }
      console.groupEnd();
    }
  console.groupEnd()
}

console.clear();
