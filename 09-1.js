const getMoviesAsync = async () => {
  try {
    const res = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await res.json();
    console.log(`json`, json);
  } catch (e) {
    console.log(`e`, e);
  } finally {
    console.log("end");
  }
}; //try, catch로 오류 잡아내기
getMoviesAsync();
