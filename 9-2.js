const getMoviesAsync = async () => {
  try {
    const [moviesResponse, upcomingResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"),
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100"),
    ]); // Promise.all을 이용하여 한번에 통신하기
    const [movies, upcoming] = await Promise.all([
      moviesResponse.json(),
      upcomingResponse.json(),
    ]);
    console.log(movies, upcoming);
  } catch (e) {
    console.log(`e`, e);
  } finally {
    console.log("end");
  }
};
getMoviesAsync();
