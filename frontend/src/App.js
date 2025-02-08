import { useState } from 'react';
import './App.css';
import SignUp from './SignUp';

function App() {

  const [name, setName] = useState('');

  return (
    <div className="App">
      <SignUp
        name = {name}
        setName = {setName}
      />
    </div>
  );
}

export default App;
