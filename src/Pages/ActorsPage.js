import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import ActorsCards from "../component/ActorsCards";
import ActorModel from "../model/ActorModel";


function ActorsPage() {
  const [actors, setActors] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("0");
  useEffect(() => {
    axios.get("actors.json").then(res => {
      const newActors = res.data.map(plainActor => new ActorModel(plainActor));
      setActors(newActors);
    });
  }, []);
  
  return (
    <Container>
      <Form className="row">
        <Form.Control className="col-8" onChange={(e) => setFilterText(e.target.value)}></Form.Control>
        <Form.Control value={sortBy}as="select" className="col-4" onChange={(e) => setSortBy(e.target.value)}>
          <option value="0">First Name</option>
          <option value="1">Last Name</option>
          <option value="2">Age</option>
        </Form.Control>
      </Form>
      <ActorsCards actors={filterText.length > 0 ?actors.filter((actor) => actor["firstName"].toLowerCase().includes(filterText)|| actor["lastName"].toLowerCase().includes(filterText)): actors}></ActorsCards>
    </Container>
  );
}

export default ActorsPage;