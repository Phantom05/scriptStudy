
let slide2Lbt = document.getElementsByClassName('slide2_btL')[0];
let slide2Rbt = document.getElementsByClassName('slide2_btR')[0];

var $slide2 = $('.slide2_ul');
$('.slide2_btL').on('click',function(){
  $slide2.animate({left:"-100%"},500,function(){
    $slide2.find(':first').insertAfter($slide2.find(':last'))
    $slide2.css({left: "0"});
  })
})

$('.slide2_btR').on('click',function(){
  $slide2.find(':last').insertBefore($slide2.find(":first"))
  $slide2.css({left:"-100%"});
  $slide2.animate({left:"0"},500)
})

let idx = 0;
const bxbt = document.getElementById("bxbt");
const prbt = document.getElementById("prbt");
const $abcUl = $(".slideUl");

prbt.addEventListener("click", function() {
  if (idx == 0) {
    $abcUl.animate({ left: "-100%" }, 500, function() {
      // $abcUl.find(":first").insertAfter($abcUl.find(":last"));
      $abcUl.append($abcUl.find(":first"))
      $abcUl.css({left: "0"});
      idx--;
    });
    idx++;
  }
});
bxbt.addEventListener("click", function() {
  if (idx == 0) {
    // $abcUl.find(":last").insertBefore($abcUl.find(":first"));
    $abcUl.prepend($abcUl.find(":last"))
    $abcUl.css({left: "-100%"});
    $abcUl.animate(
      {left: "0"},500,function() {
        idx--;
      }
    );
    idx++;
  }
});



// show case
