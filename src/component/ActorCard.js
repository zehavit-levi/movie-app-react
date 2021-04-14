import { Card } from "react-bootstrap"
function ActorCard({ actor }) {
    console.log(actor["image"]);


    return (
        <Card className="actor-card col-3 align-items-center">
            <img className="card-img-top" src={actor["image"]} alt="" />
            <a href={actor.imdbLink} target="blank">
                <h4 className="card-title">{actor["firstName"] + " " + actor["lastName"]}</h4>
            </a>
            <h5>{actor["age"]}</h5>
        </Card >
    )
}

export default ActorCard;