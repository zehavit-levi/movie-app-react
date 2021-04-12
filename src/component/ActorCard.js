import { Card } from "react-bootstrap"
function ActorCard({ actor }) {
    console.log(actor["firstName"]);


    return (
        <Card className="actor-card col-3 ">
            <img className="card-img-top" src={actor["image"]}></img>
            <h2 className="card-title">{actor["firstName"] + " " + actor["lastName"]}</h2>
            <h4>{actor["age"]}</h4>
        </Card>
    )
}

export default ActorCard;