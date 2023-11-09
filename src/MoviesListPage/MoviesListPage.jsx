import MovieCard from "../MovieCard/MovieCard"
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage"

export default function MoviesListPage ({ moviesArray }) {
    const movieInfo = moviesArray.map((movie, idx) => (
    <MovieCard movieObj={movie} key={idx} />
    ))
    // const movieDetail = moviesArray.map((movie, idx) => (
    // <MovieDetailPage movieObj={movie} key={idx} />
    // ))
    return(
        <>
            <h1>MoviesListPage</h1>
                {movieInfo}
        </>
    )
}