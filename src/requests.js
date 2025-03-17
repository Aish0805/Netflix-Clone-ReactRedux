const API_KEY = "607b6b415deafeb0142b9e964f5d98b5";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,    
    // fetchMovie: `/movie/${id}?api_key=${API_KEY}&language=en-US`,
    // fetchMovieCast: `/movie/${id}/credits?api_key=${API_KEY}`,
    // fetchMovieReviews: `/movie/${id}/reviews?api_key=${API_KEY}`,    
    // fetchTv: `/tv/${id}?api_key=${API_KEY}&language=en-US`,
    // fetchTvCast: `/tv/${id}/credits?api_key=${API_KEY}`,
    // fetchTvReviews: `/tv/${id}/reviews?api_key=${API_KEY}`,    
    // fetchTvSimilar: `/tv/${id}/similar?api_key=${API_KEY}`,
    // fetchTvRecommendations: `/tv/${id}/recommendations?api_key=${API_KEY}`, 
    
    // fetchTvRecommendations: `/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
}
export default requests;