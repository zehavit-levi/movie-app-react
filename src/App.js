import ActorsPage from './pages/ActorsPage/ActorsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage/HomePage';
import Switch from 'react-bootstrap/esm/Switch';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <Container>
      <Navbar className="navbar-container">
        <Navbar.Brand href="#/">Home Page</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#/movies">movies</Nav.Link>
          <Nav.Link href="#/actors">actors</Nav.Link>
        </Nav>
      </Navbar>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/movies"><MoviesPage /></Route>
          <Route exact path="/actors"><ActorsPage /></Route>
        </Switch>
      </HashRouter>
    </Container>
  );
}

export default App;
