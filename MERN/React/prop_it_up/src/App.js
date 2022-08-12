import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Chuck"} lastName={"Payne"} age={33} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Calhoune"} age={54} hairColor={"Purple"}/>
      <PersonCard firstName={"Becky"} lastName={"Marshall"} age={28} hairColor={"Blonde"}/>
      <PersonCard firstName={"Bill"} lastName={"Tucker"} age={8} hairColor={"Blonde"}/>
    </div>
  );
}

export default App;
