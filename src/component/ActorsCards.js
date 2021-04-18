import ActorCard from "./ActorCard";

export default function ActorsCards(props) {
    let actorsCards;
    let actors = props.actors;

    if (actors) {
        actors = actors.sort((a, b) => a[props.sortBy] > b[props.sortBy] ?1 : -1);
        console.log("sortBy: " + props.sortBy + "filter: " + props.filterBy);
        if (props.filterBy !== "") {
            actors = actors.filter((actor) => (actor["firstName"].toLowerCase() + " " + actor["lastName"].toLowerCase()).includes(props.filterBy));
        }
        actorsCards = actors.map((actor, index) => <ActorCard key={index} actor={actor} />)
    }

    return (
        <div className="row align-items-center">
            {actorsCards}
        </div>
    )

}