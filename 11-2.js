const useSet = new Set([1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 6, 7, 7]);
console.log(useSet); // Set함수는 중복값을 배제한다. 전부다 유니크 처리한다
console.log(useSet.has(5)); // 해당값 갖고있는지 확인하고 ture/false반환

useSet.delete(2); // 해당값 제거
console.log(`delete`, useSet); // 제거된 array

useSet.clear(); // 전부제거
console.log(`clear`, useSet);

useSet.add("hi");
console.log(useSet);

console.log(`size`, useSet.size); // 크기 확인

console.log(Array.from(useSet)); // array like object를 array로 변경
