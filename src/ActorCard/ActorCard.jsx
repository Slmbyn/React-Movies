// import './ActorCard.css'

export default function ActorCard({ newCastArray }) {
    const randomImg = () => 'https://picsum.photos/200/300';
    const actorName = newCastArray.map((name, idx) => (
        <div 
            key={idx}
            style={{
                background: `url(${randomImg()})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        > {name} </div>
    ));
    // Returning the array of elements
    return (
        <div
            className="actorname"
        >
            <div>{actorName}</div>
        </div>
    );
}
