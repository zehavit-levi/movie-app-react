import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Spinner } from "react-bootstrap";
import ActorsCards from "../component/ActorsCards";
import ActorModel from "../model/ActorModel";
import "./ActorsPage.css";
// import actorsJson from "../data/actors.json"


function ActorsPage() {
  // const [actors, setActors] = useState(actorsJson.map(plainActor => new ActorModel(plainActor)));
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("firstName");
  const [actors, setActors] = useState(null);
  useEffect(() => {
    console.log("actors json");
    const pathPre = process.env.PUBLIC_URL;
    axios.get(pathPre.concat("/actors.json")).then(res => {
      const newActors = res.data.map(plainActor => new ActorModel(plainActor));
      setActors(newActors);
    });
  }, []);



  return (
    <Container className="actor-page">
      <Form className="row header-actor-page">
        <div className="filter-container col-md-8 col-12">
          <Form.Control className="actor-filter" value={filterText} onChange={(e) =>{
            let val = e.target.value.toLowerCase();
            setFilterText(val);
          }} placeholder="Tap your filter"></Form.Control>
        </div>
        <div className="select-container col-md-4 col-12">
          <Form.Control value={sortBy} as="select" onChange={(e) => setSortBy(e.target.value)}>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="age">Age</option>
          </Form.Control>
        </div>
      </Form>
    {actors ?
      <ActorsCards actors={actors} filterBy={filterText} sortBy={sortBy} ></ActorsCards> : 
      <Spinner className="spinner-border"/>}
    </Container>
  );
}

export default ActorsPage;