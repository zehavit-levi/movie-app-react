import { Card } from "react-bootstrap"
import "./ActorCard.css"
function ActorCard({ actor }) {
    console.log(actor["image"]);


    return (
        <div className="card-container col-xs-12 col-sm-6 col-md-4 col-lg-3" >
            <Card className="actor-card align-items-center">
                <img className="card-img-top" src={actor["image"]} alt="" />
                <a href={actor.imdbLink} target="blank" >
                    <h4 className="card-title">{actor["firstName"] + " " + actor["lastName"]}</h4>
                </a>
                <h5>{actor["age"]}</h5>
            </Card >
        </div >
    )
}

export default ActorCard;