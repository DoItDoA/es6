const hello = fetch("http://google.com");

console.log("something");

// fetch는 통신이어서 시간이 조금 걸린다. 그래서 통신하는 동안 다른 작업을 실행하게하고 결과를 보면 "something"이 먼저 나오고 fetch 결과가 나온다
// 이러한 동시 작업을 비동기성이라고 부른다
