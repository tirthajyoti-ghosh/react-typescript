import './App.css';
import Button from './components/Button';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
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
      <Button handleClick={(e) => console.log('Button', e)} />
      <Input value="" handleChange={(e) => console.log('Input', e)} />
    </div>
  );
}

export default App;
