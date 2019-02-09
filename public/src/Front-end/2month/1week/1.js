if (!document.getElementsByClassName('list__li')[0]) {
  let listInner = document.getElementById('listInner');
  listTower.innerHTML = '';

  let div = document.createElement('div');
  div.classList.add('nolist');
  div.textContent = "고객 리스트가 없습니다.";
  listTower.appendChild(div);
}

let listIdx = 0;
document.getElementById('reportForm').addEventListener('submit', function (e) {
  e.preventDefault();

  if(listIdx === 0){
    listTower.innerHTML='';
    listIdx=1;
  }

  if(this.name.value.trim().length < 1 || this.address.value.trim().length < 1|| this.email.value.trim().length < 1){
    alert('세개의 칸 모두를 입력해 주세여.')
  }else{


    let li = document.createElement('li');
    li.classList.add('list__li');
  
    let nameDiv = document.createElement('div');
    let addressDiv = document.createElement('div');
    let emailDiv = document.createElement('div');
  
    nameDiv.classList.add('list__box');
    nameDiv.innerHTML = this.name.value;
  
    addressDiv.classList.add('list__box');
    addressDiv.innerHTML=this.address.value;
  
    emailDiv.classList.add('list__box');
    emailDiv.innerHTML=this.email.value;
  
    li.append(nameDiv);
    li.append(addressDiv);
    li.append(emailDiv);

    document.getElementById('listTower').append(li);

    let listAmount = document.getElementsByClassName('list__li');
    let listTowerHeight =  listAmount[0].clientHeight*10;

    document.getElementById('list').style.height = listTowerHeight+'px';


    this.name.value='';
    this.address.value='';
    this.email.value='';

    console.log(`총인원 : ${listAmount.length}`)
  }
});

// cutomer__list_box 스크롤 하이를 box에 맞춰서
/**
 * 
 *     if(listIdx ==0){
      let amtDiv = document.createElement('div');
      amtDiv.classList.add('amountList');
      this.append(amtDiv);
    }

    let amtTitleDiv = document.createElement('div');
    amtTitleDiv.classList.add('amount__title');
    amtTitleDiv.innerHTML = `총계 : <span class="amount__bd">${listAmount.length} 명</span>`;

    amtDiv.append(amtTitleDiv)

 */
