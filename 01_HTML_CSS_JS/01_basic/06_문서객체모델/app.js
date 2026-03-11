// document 객체는 웹 페이지 최상위 DOM 요소
console.log(document);

// HTML Collection
// document에서 getElements로 찾아온 요소들의 묶음
// 유사 배열 (배열 메소드 사용불가)
let li = document.getElementsByTagName('li');
console.log(li);

// 요소노드를 불러올 때 $표시 사용 관례
const $h1 = document.getElementById('header');

$h1.style.color = 'red';
