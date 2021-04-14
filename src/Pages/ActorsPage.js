import { useState } from "react";
import { Container } from "react-bootstrap";
import ActorCard from "../component/ActorCard";


function ActorsPage() {
    const [actors, setActors] = useState();
    const [filterText, setFiltaerTexe] = useState();
    const [sortBy, setSortBy] = useState();
    
    const [actors,setActors] = useState(null);
  let actor1 = new Actor("Julia","Roberts ",'28-10-1967',julia );
  setActors(actors.concat(actor1));
    const actorsCards = [];
    actorsCards.push(<ActorCard actor={actors[0]}></ActorCard>)
    return (
        <Container>
          {actorsCards}
        </Container>
    );
}

export default ActorsPage;