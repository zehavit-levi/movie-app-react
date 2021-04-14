import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ActorPageHeader from "../component/ActorPageHeader";
import ActorsCards from "../component/ActorsCards";
import ActorModel from "../model/ActorModel";


function ActorsPage() {
    const [actors, setActors] = useState(null);
    
    // const [filterText, setFiltaerTexe] = useState();
    // const [sortBy, setSortBy] = useState();
    useEffect(()=>{
    axios.get("actors.json").then(res=>{
      const newActors = res.data.map(plainActor => new ActorModel(plainActor));
      setActors(newActors);
    });
  }, []);
    
    return (
        <Container>
          <ActorPageHeader></ActorPageHeader>
        <ActorsCards actors = {actors}></ActorsCards>
        </Container>
    );
}

export default ActorsPage;