class Counter {
  constructor({ initialNumber = 0, countId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(countId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.Event(); // 이벤트를 처음부터 호출
  }
  Event = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }; // this.함수 호출시 반드시 화살함수를 써야한다
  increase = () => {
    this.count = this.count + 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ countId: "count", plusId: "plus", minusId: "minus" });
new Counter({
  countId: "count2",
  plusId: "plus2",
  minusId: "minus2",
  initialNumber: 10,
}); // 클래스 사용시 재사용성이 용이하다
