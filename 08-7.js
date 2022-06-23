fetch("https://yts.mx/api/v2/list_movies.json")
  .then((res) => {
    console.log(`res`, res); // response는 json데이터이다. console.log(res.json())하면 promise<pending>이 뜬다. 이 경우 then을 한번 더 써야한다 그럼 json데이터를 받을 수 있다
    return res.json();
  })
  .then((json) => console.log(`json`, json))
  .catch((e) => console.log(`e`, e));
