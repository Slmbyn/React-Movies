import ActorCard from "../ActorCard/ActorCard"

export default function ActorListPage ({ moviesArray }) {
    // Get access to Cast Array
        const castArray = moviesArray.map((moviesObj, idx) => moviesObj.cast)
    // Create a new array combining all castArray values
        const allCast = [].concat(...castArray)
            // const allCastLength = allCast.length;
            // console.log(`allCast: ${allCast}`)
            // console.log(`allCastLength: ${allCastLength}`)
        // Turn it into a Set
        const castSet = new Set(allCast)
        // Turn back into an Array
        const newCastArray = Array.from(castSet)
            // const newCastArrayLength = newCastArray.length;
            // console.log(`newCastArrayLength = ${newCastArrayLength}`)
            // console.log(`newCastArray = ${newCastArray}`)
    // Pass newCastArray to <ActorCard />
    const actorCard = <ActorCard newCastArray={newCastArray} />
    return(
        <>
            <h1>ActorListPage</h1>
            <div>{actorCard}</div>
        </>    
    )
}