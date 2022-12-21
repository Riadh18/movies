import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavScrollExample from './Comp/NavScrollExample';
import Movies from './Comp/Movies';
import StarRating from "./Comp/StarRating";

function App() {
  return (
    <div>
      <NavScrollExample/>
      <Movies/>
      <StarRating />
    </div>
  );
}

export default App;
