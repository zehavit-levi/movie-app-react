import ActorsPage from './Pages/ActorsPage';
import julia from './assets/images/julia.jpg';
import Actor from './model/Actor';

function App() {
  
  let actor1 = new Actor("Julia","Roberts ",'28-10-1967',julia );
  setActors([actor1]);
  return (
  <div>
    <ActorsPage></ActorsPage>
  </div>
  );
}

export default App;
