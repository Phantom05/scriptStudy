document.getElementById('start').addEventListener('click', function (e) {
  e.preventDefault();
  goMarket()
})

function goMarket() {
  let letsGame = confirm('시장에 가면 게임을 시작하시겠습니까?');

  if (letsGame) {
    goMarket.filterArr = ['있고', '있고', '잇고', '있꼬', '이꼬', '이꾸', '있꾸', '잇꾸', '잇교'];
    goMarket.res = [];
    let go = true;
    let idx= 0;
    let temp=[];

    while (go) {
      let word;
      word=[];
      try{
         word = prompt('시장에 가면~ 시장에 가면~');
         let tw= word.split('');
         tw.forEach((x)=>{
           (!isNaN(x))?tw= false:tw= true;
         });
         if(tw){ word = word.split(' ');
         console.log(word)
         }else{
          console.error('떙! 숫자는 시장에 없습니다.');
          break;
         }
      }catch(err){
        console.error('게임을 종료하셨습니다!');
        break;
      }
      
      console.log(idx);

      if (idx == 0) {
        word.forEach((x, y) => {
          (y % 2 == 0) ? goMarket.res.push(x): true;
        });
      }else{
        word.forEach((x, y) => {
          if(idx%y ==0){
            console.log('in')
            console.log(goMarket.res.includes(x))
          }
          if(y % 2 == 0){
            goMarket.res.push(x)
          };
        });
      }


      console.log(
        goMarket.res
      )

      idx++;
    }


    return;
  }
  alert('다음에 가죠 =v=!')
}
