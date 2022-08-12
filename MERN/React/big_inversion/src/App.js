import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
      <PersonCard firstName="John" lastName="Wells" age={ 18 } hairColor="Black" />
      <PersonCard firstName="John" lastName="Madden" age={ 28 } hairColor="Green" />
      <PersonCard firstName="John" lastName="Adley" age={ 38 } hairColor="Blonde" />
    </div>
  );
}

export default App;
