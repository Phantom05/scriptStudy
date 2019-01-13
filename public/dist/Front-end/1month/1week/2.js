'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
if (typeof 뚠뚠 === 'string') {
  console.log('alright');
  console.log(typeof 뚠뚠 === 'undefined' ? 'undefined' : _typeof(뚠뚠));
} else if (typeof 뚠뚠 === 'number') {
  console.log('number');
  console.log(typeof 뚠뚠 === 'undefined' ? 'undefined' : _typeof(뚠뚠));
} else if (typeof 뚠뚠 === 'undefined') {
  console.log('unbelivable');
}
console.clear();

var kiziDate = function () {
  function kiziDate(set) {
    _classCallCheck(this, kiziDate);

    this.year = 2019;
    this.month = '0' + 1;
  }

  _createClass(kiziDate, [{
    key: 'getYear',
    value: function getYear() {
      return this.year;
    }
  }, {
    key: 'getMonth',
    value: function getMonth() {
      return this.month;
    }
  }]);

  return kiziDate;
}();

function insertDivContent(tar, el, content, fr) {
  var arg = [].concat(Array.prototype.slice.call(arguments));
  if (arg.length > 3) {
    var _console;

    (_console = console).log.apply(_console, arguments);
    for (var i = 0; i < fr; i++) {
      var _insertEl = document.createElement(el);
      _insertEl.innerHTML = content;
      tar.append(_insertEl);
    }
    return;
  }
  var insertEl = document.createElement(el);
  insertEl.innerHTML = content;
  tar.append(insertEl);
}
insertDivContent(document.getElementById('res1'), 'span', 'Insert Element');
insertDivContent(document.getElementById('res2'), 'h1', '고객리스트');
insertDivContent(document.getElementById('res3'), 'div', '고객리스트', 10);

var dataarr = ['VIP 고객님', '서민 고객님', '중민 고객님', '상인 고객님', '본부장 아들'];
for (var i = 0; i < dataarr.length; i++) {
  insertDivContent(document.getElementById('res2'), 'div', dataarr[i]);
}

function getNunRange(n, r) {
  if (n >= r) {
    return 'Success';
  } else {
    return 'Fail!';
  }
}

console.log(getNunRange(100, 5));

function getText(text) {
  return '\uBC1B\uC740 \uD14D\uC2A4\uD2B8\uB294 ' + text + ' \uC785\uB2C8\uB2E4. ';
}

function doCal(n1, n2) {
  return '\uB450 \uC218\uC758 \uD569\uC740 ' + (n1 + n2) + ' \uC785\uB2C8\uB2E4.';
}
console.log(doCal(2000, 1204));

console.log(getText('커피숍'));

var newObj = {
  name: 'new Object',
  arr: ['food', 'game', 'coding'],
  test: function test(t) {
    return 'name : ' + this.name + ', arr target : ' + this.arr[t];
  }
};

function abc() {
  console.log(this);
}
abc();

console.log(newObj.test(2));

var date1 = new kiziDate();

console.log(date1.getYear() + '-' + date1.getMonth());

var nowYears = new Date();
nowYears.abc = 'hello';
nowYears.name = '육성재';
console.log(nowYears.getFullYear());
console.dir(nowYears);

function getAbc(t) {
  console.log('abc');
  return 'abc';
}

var txt = 'wejwrgjenrgergnergjnergjjergoj';
var txt1 = new String('afafafafaf');
console.log(txt.length);
console.log(txt1);
console.dir(String);

var kiziString = {
  length: 4
};
console.log(kiziString.length);

var txt2 = 'Hello world Hello programming!';
console.log();
var sli = txt2.indexOf('Hello', 8);
console.log(sli);

var ttt1 = "Wow, Fantastic Baby!";
console.log(ttt1.slice(5, 14)); // 천번째인자 이상, 두번째인자 미만 까지 자름, start, end

var ttt2 = "Wow, Fantastic Baby!";
console.log(ttt2.substring(5, 10));
console.log(ttt2);