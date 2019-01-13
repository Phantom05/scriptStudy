
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




