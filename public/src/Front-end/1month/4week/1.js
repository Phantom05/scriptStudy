var arr = ['야호','등산','바다','트래킹'];
console.log(
  arr.join(' ! ')
)
arr.splice(2,1);
console.log(
  arr
)

let list = document.getElementById('list');
let customer=['철수','영희','짱구','멩구','피콜로'];



customer.forEach((x,y,z)=>{
  console.log(x)
  console.log(y)
  console.log(z)
})

console.clear();
let tnum = [1,2,3,4,5];

console.log(
  tnum.map((x)=>{
    return x*5
  })
)
console.clear();

console.log(
  tnum.filter((x)=>{
    return x>3
  })
)

let reduceArr = [2,5,7,2,3,3];

console.log(
  reduceArr.reduce((x,y)=> {
    return x+y;
  })
)

let evenyArr = [1,2,3,4,5];

console.log(
  evenyArr.every((x)=>{
    return x>0
  })
)

let indexOfArr = ['Apple','Samsung','피카츄'];

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

document.getElementById('tForm').addEventListener('submit',function(e){
  e.preventDefault();
  console.log(' 나 간닷!')
  console.log(this.tTextInput.value)
  console.log(e.target.tTextInput.value)

  console.log(
    document.getElementById('textInput').value
  )
  
})


document.getElementById('target').removeAttribute('class')
