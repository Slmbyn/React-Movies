import { Link } from "react-router-dom";

export default function MovieCard({ movieObj }) {
    const poster = movieObj.posterPath;
    const title = movieObj.title;
    const releaseDate = movieObj.releaseDate;
    const titleURL = `/movies/${title}`
    return (
        <Link to={titleURL}>
            <ul style={{
                background: `URL(${poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '200px',
                height: '350px',
                listStyle: 'none',
                paddingLeft: '0'
            }}>
                <li
                    style={{
                        background: 'rgba(255, 255, 255, 0.7',
                    }}
                >{title}</li>
                <li
                    style={{
                        background: 'rgba(255, 255, 255, 0.7',
                    }}
                >{releaseDate}</li>
            </ul>
        </Link>
    )
}