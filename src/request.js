const API_KEY='e07420b025d354673a8dbc1f1e36d57c'

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentariesMovies:`/discover/movie?api_key=${API_KEY}&with_genre=99`
}