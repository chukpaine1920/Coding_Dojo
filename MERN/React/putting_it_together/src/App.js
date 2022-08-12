
import './App.css';
import Birthday from './components/Birthday';

function App() {
  return (
    <div className="App">
    <Birthday firstName={"Chuck"} lastName={"Payne"} age={33} hairColor={"Black"}/>
    <Birthday firstName={"Chuck"} lastName={"Payne"} age={33} hairColor={"Black"}/>
    <Birthday firstName={"Chuck"} lastName={"Payne"} age={33} hairColor={"Black"}/>
    </div>
  );

}

export default App;
