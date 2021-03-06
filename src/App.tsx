import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import User from './components/state/User';
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
      <Button handleClick={(e) => console.log('Button', e)} />
      <Input value="" handleChange={(e) => console.log('Input', e)} />
      <Container styles={{ border: '1px solid black', padding: '3rem' }} />
      <User />
    </div>
  );
}

export default App;
