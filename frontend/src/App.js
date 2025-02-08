import { useState } from 'react';
import './App.css';
import SignUp from './SignUp';

function App() {

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

  return (
    <div className="App">
      <SignUp
        name = {name}
        setName = {setName}
        email = {email}
        setEmail = {setEmail}
      />
    </div>
  );
}

export default App;
