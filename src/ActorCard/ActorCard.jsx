// import './ActorCard.css'

export default function ActorCard({ newCastArray }) {
    const actorName = newCastArray.map((name, idx) => (
        // const randomImg = () => 'https://picsum.photos/200/300';
        <div 
            key={idx}
            style={{
                // background: `url(${randomImg()})`,
                background: 'url(https://picsum.photos/200/300?random)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '200px',
                height: '200px'
            }}
        > {name} </div>
    ));
    // Returning the array of elements
    return (
        <div
            className="actorname"
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}
            >{actorName}</div>
        </div>
    );
}
