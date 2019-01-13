
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

function insertDivContent(tar,el,content){
  let insertEl = document.createElement(el);
  insertEl.innerHTML = content;
  tar.append(insertEl);
}

insertDivContent(document.getElementById('res1'),'span','세상 당황')
