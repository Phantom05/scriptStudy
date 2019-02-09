
var arr = ['a','b','c','d','e'];

arr.forEach(x=>{
  console.log(x)
});

var bounder = []

document.getElementById('addForm').addEventListener('submit',function(e){
  e.preventDefault();
  bounder.push(this.insertInput.value);
  this.insertInput.value = '';
})


function doIterFunc(arr,tg){
  arr.forEach(x=>{
    let div = document.createElement('div');
    div.innerHTML = x;
    div.classList.add('testlist');
    tg.append(div)
  })
}
doIterFunc(bounder,document.querySelector('#list'));



var numArr = [1,2,3,4,5,6,7,8];
var a = numArr.map(el => {
  if(el %2 == 0){
    return el
  }
});
console.log(a);


var b = numArr.filter(x=>{
  return x >5
});
console.log(b);


var arr = [1,2,3,4,5];

// function _map(x,f){
//   var newArr = [];
//   for(var i =0; i< ar.length; i++){
//     newArr.push(ar[i])
//   }
//   return newArr;
// };

// var testMap = _map(arr);

// console.log(
//   testMap
// )



var numArr = [1,2,3,4,5];
numArr.reduce((x,y)=>{
  return x+y;
});



var newArr=[1,2,3,4,5];
console.log(
  newArr.every(x=>x>0)
);

console.log(
  newArr.some(x=>x<3)
);

function getIdxArr(arr,t){
  return (arr.indexOf(t) > -1)?true:false;
};

function a(){
  return function b(){
    return 
  }
};

console.log(
  getIdxArr(newArr,5)
);



document.querySelector('#getFruit').addEventListener('click',function(e){
  var testArr = ['사과','수박','참외','바나나'];
  var menu = prompt(`${testArr}를 판매하고 있습니다.\n무엇을 구매하시겠습니까? `);
  (getIdxArr(testArr,menu))
  ?alert('맛있게 드세요~ =v=')
  :alert('그런 메뉴는 없습니다.')
});

var numArr = [1,2,3,4,5];
console.log(
  numArr.find(x=>{
    return x>2
  })
);


console.log('오류시작');

try{
  console.log(eerh);
}catch(err){
  console.error(err+' 서버오류야!');
}finally{

}

console.log('오류종류');


var abc;
abc = 'abc';
console.log(abc);

function scopeF(){
  let g = 'a';
}


var name ='수박';

function abfc(){
  console.log(name,'first');
  name ='참외';
  console.log(name,'seconds');
};

abfc();
console.log(name);


var slgjnrljg='erg';
console.log(slgjnrljg);
console.clear()

console.log(this.document)
/**
 * 그냥 this를 사용하면 window가 타겟이 된다.
 * 함수 안에서 사용해도 window를 타겠한다.
 * 객체내의 함수에서 this를 사용할시 자신이 포함된 객체를 타겟
 * 
 */

function agggg(){
   console.log(this)
 }
agggg();

console.clear();
var objggg ={
  name:"TEST",
  lastName:"수",
  tarthis(){
    console.log(`${this.name} ${this.lastName}`);

    return (function(){
      // console.log(this)
    })()
  }
}
objggg.tarthis();



// document.querySelector('#tBt').addEventListener('click',function(e){
//   e.preventDefault();
//   console.log(this)
// });

document.querySelector('#tForm').addEventListener('submit',function(e){
  e.preventDefault();
  console.log(this.tIn.id);
});

var obj1= {
  getName(){
    return this.firstName+' '+this.lastName+' '+this.middleName;
  }
};

var obj2 ={
  firstName:'수',
  lastName:'박',
  middleName:'참외'
};

console.log(
  obj1.getName.call(obj2)
);
console.dir(console);

const constarr=[1,2];
constarr.push(4567);

const constobj={
  fff:'fff',
};
constobj.aaa = 'aaa';
console.log(constobj);
const ggg = 'gergerg';



// {
//   var x = 10;
// }
// console.log(x);


// {
//   let y = 5;
// }
// console.log(y);



console.clear();
/**
 * 시장에 가면
 */
