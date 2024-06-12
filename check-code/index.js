const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDA1ZjM4MDEzN2M4MzkzNDEwMmM5Zjk3ZTcxZDZkNCIsInN1YiI6IjY2NjQxYjZlZGE0MWEyMmVmMmUxNjU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YsR3fiIJS9ia5k3as2RKqvg3hl0dd_6FTeT5UZ514YM"

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};
fetch('https://api.themoviedb.org/3/movie/popular', options) 
.then(res => res.json())
.then(data => {
    const movies = data.results;
    console.log(movies);
});