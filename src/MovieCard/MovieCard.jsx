import { Link } from "react-router-dom";

export default function MovieCard({ movieObj }) {
    const poster = movieObj.posterPath;
    const title = movieObj.title;
    const releaseDate = movieObj.releaseDate;
    return (
        <Link to='/movies/:movieName'>
            <ul style={{
                background: `URL(${poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <li>{title}</li>
                <li>{releaseDate}</li>
            </ul>
        </Link>
    )
}