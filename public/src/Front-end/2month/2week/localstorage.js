


console.log(localStorage);


localStorage.

document.getElementById('uploadForm').addEventListener('submit',function(e){
  e.preventDefault();
  console.log(this.username.value);
  console.log(this.password.value);
  localStorage.setItem(this.username.value,'username');
  localStorage.setItem('password',this.password.value);
  window.location.reload();
})

document.getElementById('delete').addEventListener('click',function(e){
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
})
