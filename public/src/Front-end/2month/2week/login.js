let user = {
  name:"",
  pw: ""
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.clear();
  
  user.name = this.loginId.value.trim();
  user.pw = this.loginPw.value.trim();

  this.loginId.value = "";
  this.loginPw.value = "";

  if(database.user[`${user.name}`] == +user.pw){
    alert('환영합니다!');
    window.location.href = './mypage.html'
  }else{
    alert('아이디와 비밀번호를 확인해주세요.');
  }
})

