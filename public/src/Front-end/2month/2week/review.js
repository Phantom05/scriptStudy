console.log(localStorage);

document.getElementById('res').innerHTML = (localStorage.getItem('num')) ? localStorage.getItem('num') : '0';



function doMakeOption(tg,str,end) {
  for (let i = str; i <= end; i += 1) {
    let opt = document.createElement('option');
    opt.innerHTML = i;
    opt.value = i;
    document.getElementById(`${tg}`).append(opt)
  }
}
doMakeOption('settingNumBox',1,10);

document.getElementById('sum').addEventListener('click', function (e) {
  e.preventDefault();
  localStorageCalSetting('+', 'res', +document.getElementById('settingNumBox').value);
})

document.getElementById('subtract').addEventListener('click', function (e) {
  e.preventDefault();
  localStorageCalSetting('-', 'res', document.getElementById('settingNumBox').value)
})


function localStorageCalSetting(cal, tg, setNum) {
  let settingNum = setNum;
  let newNum = null;
  if (localStorage.getItem('num')) {
    if (cal == '+') {
      newNum = +localStorage.getItem('num') + settingNum
    }
    if (cal == '-') {
      newNum = +localStorage.getItem('num') - settingNum;
    }
  } else {
    newNum = settingNum;
  }
  localStorage.setItem('num', newNum);
  document.getElementById(`${tg}`).innerHTML = localStorage.getItem('num');
  console.log(localStorage);
}


document.getElementById('delete').addEventListener('click', function (e) {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
})
