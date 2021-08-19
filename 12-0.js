/* generatoer */

function* listPeople() {
  yield "Dal";
  yield "Flynn";
  yield "Mark";
  yield "Godkimchi";
  yield "Korean";
} // function에 *을 붙이는 것을 generator라고 하고 yield를 하나씩 호출한다

const listG = listPeople();
console.log(listG); // 아무것도 표시 안됨
console.log(listG.next()); // "Dal"부터 호출, done:false는 다음이 남아있다는 뜻
console.log(listG.next()); // "Flynn"
console.log(listG.next()); // "Mark";
console.log(listG.next()); // "Godkimchi";
console.log(listG.next()); // "Korean";
console.log(listG.next()); // undefined, done:true는 다음이 없다는 뜻

const alphabet = ["a", "b", "c", "d", "e"];

function* alphabetTeller() {
  for (const letter of alphabet) {
    yield letter;
  }
}

const letterLooper = alphabetTeller();
console.log(letterLooper.next());
