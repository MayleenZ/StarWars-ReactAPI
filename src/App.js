import './App.css';
import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarShipCard from './components/StarShipCard';

function App() {
  const [starship, setStarship] = useState([])
  //useState takes the initial value of an empty array and returns an array with two items. first is current state value and second is a function that can be used to update the state value. useState hook has new state called starship with initial value of empty array. the setStarship can be used to update the variable of starship state variable. This syntax is called array destructuring. 

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllStarships();
      setStarship(data.results);
      //update starship with setterfunction setStarShip
    };
    fetchData();
  }, []);
//using it once with empty brackets at the end 
//fetch starship data using getAllstarships function from sw-api.js and update the starship state with the retrieved data. Second argument is empty bracket so it wil run once, when component is mounted. 

  return (
    <div>
    <h1 id = "title">STAR WARS STARSHIPS</h1>
    <div className="App">
      {starship.map((starship,index) => (
        <StarShipCard starship={starship} key={index}/>
      ))}
    </div>
    </div>
  );
}

export default App;
