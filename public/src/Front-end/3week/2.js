/**
 * 함수는 일급 객체이다.
 * 이 특성을 활용하면 고차 함수를 구현할 수 있어 함수형 프로그래밍이 가능해진다.
 * 
 * 자바스크립트 함수는 클로저를 정의한다. 클로저로 변수를 은닉하거나 영속성을 보장하는등 다양한 기능을 구현할 수 있다.
 * 
 * 클라이언측 고유한 기술 요소
 * window 인터페이스 : 자바스크립트로 브라우저 또는 창을 조작하는 기능을 제공
 * DOM : 자바스크립트로 HTML 문서의 요소를 제어하는 기능을 제공
 * XMLHttpRequest : 서버와 비동기로 통신하는 기능을 제공한다.
 * 
 * HTML5 주요 API
 * - Drag and Drop
 * - Blob
 * - File
 * - Web Workers
 * - Web Storage
 * - Indexed Database
 * - WebSockets
 * - Geolocation
 * - Canvas
 */

function fact(n) {
  if (n <= 1) return n;
  return n * fact(n - 1);
}

for (var i = 0; i < 10; i++) {
  console.log(i + `! = ${fact(i)}`);
}

// console.log(fact(10));

function testFac(n){
  if(n <=0) return ;
  testFac(n-1)
}

testFac(10)