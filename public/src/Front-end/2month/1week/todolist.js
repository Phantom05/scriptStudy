
function test(x=1,y=1,action=x+y){
 
}
test();



let module = {
  todoList(){
    todoWriteForm();
    doClickTodoList();

    if(getTodoList()){


    }else{
      let todoCon = document.getElementById('todoCon');
      let nolistDiv = document.createElement('div');
      todoCon.innerHTML = '';
      nolistDiv.classList.add('todo__nolist');
      nolistDiv.textContent="투두리스트를 작성해보세요!";
      todoCon.appendChild(nolistDiv);

    }
    document.getElementsByClassName('todo__list_li');


    function getTodoList(){
      if(document.getElementById('todoTower')){
        console.log('투두리스트 있음');
        return true;
      }else{
        console.log('투두리스트 없음');
        return false;
      }
    
    }
    
    let firstIdx = 0;
    function todoWriteForm(){
      document.getElementById('todoWriteForm').addEventListener('submit',function(e){
        e.preventDefault();

        if(this.todoWriteInput.value.trim().length < 1){
          alert('내용을 입력해주세요.');
        }else{
          if(firstIdx ==0){
            firstIdx= 1;
            document.getElementById('todoCon').innerHTML='';
            let ul = document.createElement('ul');
            ul.setAttribute('class','todo__list_ul');
            ul.id = "todoTower";
            document.getElementById('todoCon').append(ul)
          }
      
          let li = document.createElement('li');
          li.classList.add('todo__list_li');
      
          let div =document.createElement('div');
          div.classList.add('todo__list_box');
      
          let input = document.createElement('input');
          input.setAttribute('type','checkbox');
          input.classList.add('todo__checkbox')
      
          let span = document.createElement('span');
          span.classList.add('todo__list_delbt');
          span.textContent='x';
      
          div.append(input);
          div.append(this.todoWriteInput.value);
          li.append(div);
          li.append(span);
          document.getElementById('todoTower').append(li);

          li.addEventListener('click',function(e){
            let tg = e.currentTarget;
            tg.classList.toggle('todo__list_chk');
            [...tg.children].map(x=> {
              if(x.className == '<span class="todo__list_delbt">x</span>'){
                console.log('삭제!')
              }
              console.log(
                x.className
              )

              
            })
          })
        }
      })
    }
    
    function doClickTodoList(){
      console.log(document.getElementsByClassName('todo__list_li'));
  
    }

    
  }
}
module.todoList();


