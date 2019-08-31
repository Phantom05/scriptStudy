var arr = ['야호', '등산', '바다', '트래킹'];
console.log(
  arr.join(' ! ')
)
arr.splice(2, 1);
console.log(
  arr
)

let list = document.getElementById('list');
let customer = ['철수', '영희', '짱구', '멩구', '피콜로'];



customer.forEach((x, y, z) => {
  console.log(x)
  console.log(y)
  console.log(z)
})

console.clear();
let tnum = [1, 2, 3, 4, 5];

console.log(
  tnum.map((x) => {
    return x * 5
  })
)
console.clear();

console.log(
  tnum.filter((x) => {
    return x > 3
  })
)

let reduceArr = [2, 5, 7, 2, 3, 3];

console.log(
  reduceArr.reduce((x, y) => {
    return x + y;
  })
)

let evenyArr = [1, 2, 3, 4, 5];

console.log(
  evenyArr.every((x) => {
    return x > 0
  })
)

let indexOfArr = ['Apple', 'Samsung', '피카츄'];

console.log(
  indexOfArr.indexOf('apple')
)


// let selectDate = new Date().getTime();
// setInterval((x)=>{
//   let date = new Date().getTime();

//   let count = new Date(selectDate - date);


//   // let years = date.getFullYear();
//   // let month = date.getMonth()+1;
//   // let dat = date.getDate();
//   // let days = date.getDay();

//   // let hours = date.getHours();
//   // let min = date.getMinutes();
//   // let sec = date.getSeconds();

//   console.log(
//     `${count}`
//   )

// },1000)

document.getElementById('tForm').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(' 나 간닷!')
  console.log(this.tTextInput.value)
  console.log(e.target.tTextInput.value)

  console.log(
    document.getElementById('textInput').value
  )

})


document.getElementById('target').removeAttribute('class')
console.clear();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min;
}

// setInterval(()=>{
//   console.log(
//     getRandomInt(2,7)
//   )
// },100);


var abc = 20
console.log(

  (abc > 30) ?
  "Small" :
  "Big"

)

var a = 1;
var b = "2";


if (+a > +b) {
  console.log('파싱 후 계산1')
} else {
  console.log(typeof + b)
  console.log('파싱 후 계산2')
}

console.log(
  isNaN('fgdg')
)
var date = new Date();
var hours = date.getHours();

if (hours < 10) {
  console.log('굿모닝')
} else if (hours > 10 && hours < 18) {
  console.log('굿 에프터눈')
} else if (hours > 18 && hours < 24) {
  console.log('굿 이브닝')
} else {
  console.log(' 자라 ')
}

console.clear();

let day = date.getDay();

switch (day) {
  case 0:
  case 6:
    {
      console.log('야호 주말이다!');
      break;
    }
  case 4:
  case 5:
    {
      console.log('야호 곧 주말이다!');
      break;
    }
  default:
    {
      console.log('으 평일');
      break;
    }
}

var food = ["비빔면", "삼겹살", "JMT 조합", "또 먹어야지!"];

for (var i = 0, len = food.length, cons = ""; i < len; i++) {
  cons += food[i] + "\n";
}

console.log(cons);

console.clear();
var obj = {
  비빔면: 3800,
  삼겹살: "3200",
  JMT: '존맛탱'
};
var lista = {
  아메리카노: 3200,
  카페모카: 5200,
  딸기스무디: 6200
}
var coffee = [];

for (key in lista) {
  coffee.push(key)
}
console.log(coffee)
console.clear();

// [[3],[3,4,6,4],['45245']]

var coffeeList = {
  list: [],
  coffee: {
    아메리카노: 3200,
    카페모카: 2600,
    얼그레이: 6200,
    고삼차: 9900,
    피콜로: 8900
  }
}

for (key in coffeeList.coffee) {
  coffeeList.list.push(key)
}
console.log(coffeeList.list);
console.clear();


var arr = [
  [],
  ["짱구", "철수", "영희", "맹구", "훈이"]
];
// arr[1].filter((x,idx)=>(idx %2 === 0)?arr[0].push(x):true);

arr[1].forEach((x, idx) => {
  (idx % 2 == 0) ?
  arr[0].push(x): true
});

console.log(arr[0]);


/*
var game = confirm('야구게임 할래?');
var answerLoop = true;

while(game){
  var b = +prompt(`1 부터 몇까지 할래? 범위를 입력해봐.\n숫자만 입력해야대!\n최소 2 부터 해야되.`);
  if(isNaN(b) || b < 2){
    alert('음.. 범위를 다시 확인해봐.');
    continue;
  }
  var answer = Math.ceil(Math.random() * b);
  console.log('정답 : ',answer)
  while(answerLoop){
    var num = prompt(`1부터 ${b}까지 중에 답이 있어 정답을 맞춰봐 ~`).trim();
    var wow;
    if(isNaN(num)) {
      alert('숫자를 입력해야지!');
      continue
    }
    if(+num == answer ){
      wow = confirm(`와우 정답을 맞췄어! \n정답은 ${answer} 였어! 다시 해볼래!?`);
      if(wow){ break; }
      game = false;
      break;
    }
    (+num > answer)
    ? wow =confirm(`${num}? 음... 그거보단 작은데..\n다시 해볼래?`)
    : wow = confirm(`${num}? 호롤로... 그거보단 크다..\n다시 해볼래?`);
    if(!wow){
      game = false;
      break;
    }
  }
}
*/

/**
 * 6자리, 1부터 45, 중복 안댐
 * 5번 자동하면은 5개가 자동으로
 */

console.clear();
var agree = confirm('로또 시작하시겠습니까?');
//자동으로만 
if (agree) {
  var isAuto = confirm('자동으로 하시겠습니까?');

  if (isAuto) {
    let autoNumArr = [];
    let autoLoop = 0;
    for (; agree;) {
      var count = prompt('몇장을 구매하시겠습니까?').trim();
      if (isNaN(count)) {
        alert('숫자를 입력해주세요!');
        continue;
      }

      for (; autoLoop < count; autoLoop++) {
        autoNumArr.push()
        for (var insArr = []; i < 6;) {
          let ran = Math.ceil(Math.random() * 45);
          if (insArr.length == 6) { break;}
          (!insArr.includes(ran)) ?
          insArr.push(ran): true
        }
        autoNumArr.push((insArr))
      }
      autoNumArr.forEach(x => {
        console.log(x.sort((x, y) => x - y))
      })
      alert('자동 출력이 완료 되었습니다!\n당첨 되었길 기원합니다!');
      agree = false;
    }

    // 아래는 수동
  } else {

  }
}
console.clear();
