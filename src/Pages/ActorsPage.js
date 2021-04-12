import { useState } from "react";
import { Container } from "react-bootstrap";
import ActorCard from "../component/ActorCard";


function ActorsPage() {
    const [actors, setActors] = useState();
    const [filterText, setFiltaerTexe] = useState();
    const [sortBy, setSortBy] = useState();
    
    
    const actorsCards = [];
    actorsCards.push(<ActorCard actor={actors[0]}></ActorCard>)
    return (
        <Container>
          {actorsCards}
        </Container>
    );
}

export default ActorsPage;