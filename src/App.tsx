import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const names = [
    { first: 'Sara', last: 'Smith' },
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' }
  ];

  return (
    <div className="App">
      <Greet name="World" messageCount={20} isLoggedIn={false} />
      <Person name={{ first: 'First', last: 'Last' }} />
      <PersonList names={names} />
    </div>
  );
}

export default App;
