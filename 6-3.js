const settings = {
  follow: true,
  alerts: true,
  unfollow: false,
};

const removeUnfollow = ({ unfollow, ...rest }) => rest; // rest를 이용하여 특정 객체 제거 ,rest가 무조건 맨뒤여야한다
const cleanSettings = removeUnfollow(settings);
console.log(cleanSettings);

const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest }); // rest와 spread를 이용하여 객체 넣기
console.log(setCountry(settings));

const setRename = ({ follow: following, ...rest }) => ({ following, ...rest }); // follow 명칭 바꾸기
console.log(setRename(settings));

const numbers = [100, 100, 1, 2, 3, 4, 5];

const removeHundred = ([, , ...rest]) => rest; // rest를 이용하여 0번째부터 배열제거
const cleanNumbers = removeHundred(numbers);
console.log(cleanNumbers);

const setZero = ([, , ...rest]) => [0, ...rest]; // rest를 이용하여 100제거후 spread이용하여 0 삽입
console.log(setZero(numbers));
