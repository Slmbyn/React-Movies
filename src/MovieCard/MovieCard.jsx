export default function MovieCard({ movieObj }) {
    const poster = movieObj.posterPath;
    const title = movieObj.title;
    const releaseDate = movieObj.releaseDate;
    return (
        <ul style={{
            background: `URL(${poster})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <li>{title}</li>
            <li>{releaseDate}</li>
        </ul>
        
    )
}