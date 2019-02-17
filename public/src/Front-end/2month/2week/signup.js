/**
 * user= {
  이메일:{
    이름:ㄹㄹㄹ
    이메일:ㄹㄹㄹ
    비밀번호: ㅎㄴㅎ
    성별:남
    생년원일 = 1992-04-10
    관심분야:[]
  }
}
 */


doMakeOpt('signupBirthYears',1950,2019);
doMakeOpt('signupBirthMonth',1,12)
doMakeOpt('signupBirthDate',1,31)

function doMakeOpt(el,str,end){
  for(let i = str; i <= end; i++){
    let optionEl = document.createElement('option');
    optionEl.value = i;
    optionEl.textContent = (i<10)?"0"+i:i ;
    document.getElementById(`${el}`).append(optionEl)
  };
  
};

document.getElementById('signupForm').addEventListener('submit',function(e){
  e.preventDefault();
  console.log('signup');
  let obj ={};
  obj.email = this.Address.value;
  obj.password = this.password.value;
  obj.gender = this.gender.value;
  obj.birth = `${this.birthYears.value}-${this.birthMonth.value}-${this.birthDate.value}`;
  obj.favorite = [];

  
    Array.from(this.children).map(x=>{
      if(x.id == "favorCoding"){
        console.log(x)
      }
    })
  

    // let favorArr = [this.favorCoding.value,this.favorExer.value,this.favorMovie.value,this.favorShop.value,this.favorTraval.value];
    // console.log(favorArr)

  getFavorList(this.favorCoding.checked,obj,this.favorCoding.value)
  getFavorList(this.favorExer.checked,obj,this.favorExer.value)
  getFavorList(this.favorMovie.checked,obj,this.favorMovie.value)
  getFavorList(this.favorShop.checked,obj,this.favorShop.value)
  getFavorList(this.favorTraval.checked,obj,this.favorTraval.value)

  database.users[`${this.Address.value}`] = obj;
  console.log(database);
  
})

function getFavorList(checked, tg, value){
  // arr.map(x=>{
  //   console.log(x)
  // });

  // let newFavor = arr.filter(x=>{
  //   if(x == true){
  //     return x;
  //   } 
  // })

  if(checked){
    tg.favorite.push(value);
  }
}


// var obj = {
//   string: 'zero',
//   yell: function() {
//     alert(this.string);
//   }
// };
// var obj2 = {
//   string: 'what?'
// };
// obj.yell(); // 'zero';
// obj.yell.call(obj2); // 'what?'



