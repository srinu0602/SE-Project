import { useState } from 'react';
import './App.css';
import SignUp from './SignUp';

function App() {

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <SignUp
        name = {name}
        setName = {setName}
        email = {email}
        setEmail = {setEmail}
        phone = {phone}
        setPhone = {setPhone}
        password = {password}
        setPassword = {setPassword}
      />
    </div>
  );
}

export default App;
