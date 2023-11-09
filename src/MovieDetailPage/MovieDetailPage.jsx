import { useParams } from "react-router-dom"

export default function MovieDetailPage ({ moviesArray }) {
    // const { movieName } = useParams();
    // console.log(movieName)
    // const movie = moviesArray.find((mov) => {
    //     if(mov.title === movieName) {
    //         return mov;
    //     }
    // } )
    let { movieName } = useParams()
    movieName = movieName.toLowerCase()
    const movie = moviesArray.find((mov) => {
        let title = mov.title.toLowerCase()
        if(title === movieName) {
            return mov
        }
    })
    console.log(movie)
    return(
        <div>
            <h1>MovieDetailPage</h1>
            <img src={movie.posterPath} />
            <div>Title: {movie.title}</div>
            <div>Release Date: {movie.releaseDate}</div>
            <div>Cast: {movie.cast.join(', ')}</div>
        </div>
    )
}