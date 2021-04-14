import ActorCard from "./ActorCard";

export default function ActorsCards({actors}) {
    let actorsCards;
    if(actors){
        actorsCards = actors.map(actor => <ActorCard actor={actor}/>)
        
    }

    return(
        <div className="row align-items-center">
            {actorsCards}
        </div>
    )
    
}