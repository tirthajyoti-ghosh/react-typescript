import './App.css';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import Status from './components/Status';

function App() {
  const names = [
    { first: 'Sara', last: 'Smith' },
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' }
  ];

  return (
    <div className="App">
      <Greet name="World" isLoggedIn={false} />
      <Person name={{ first: 'First', last: 'Last' }} />
      <PersonList names={names} />
      <Status status="loading" />
      <Heading>
        This is a heading
      </Heading>
      <Oscar>
        <Heading>The Oscar</Heading>
      </Oscar>
    </div>
  );
}

export default App;
