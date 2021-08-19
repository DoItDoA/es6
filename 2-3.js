const defaultFunction = (name = "ane") => "hi my name is " + name; // 입력값이 없을 경우 디폴트로 매개변수값을 정할 수 있다.
console.log(defaultFunction());
console.log(defaultFunction("nico"));
