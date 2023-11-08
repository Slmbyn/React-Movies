import MovieCard from "../MovieCard/MovieCard"

export default function MoviesListPage ({ moviesArray }) {
    const movieInfo = moviesArray.map((movie, idx) => (
    <MovieCard movieObj={movie} key={idx} />
    ))
    return(
        <>
            <h1>MoviesListPage</h1>
                {movieInfo}
        </>
    )
}