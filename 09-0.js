const getMoviesAsync = async () => {
  const res = await fetch("https://yts.mx/api/v2/list_movies.json");
  const json = await res.json();
  console.log(`json`, json);
}; // promise는 구식이다. async/await으로 표현하면서 좀 더 깔끔하게 표현가능하다. 8-7을 재구성

getMoviesAsync();
