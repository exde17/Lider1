import logo from './logo.svg';
import './App.css';
import { LoginButton } from './components/LoginButton';
import { Profile } from './components/Profile';
import { LogoutButton } from './components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {isAuthenticated, isLoading}= useAuth0();
  if (isLoading) return <h1>loading...</h1>
  return (
    <div className="App">
      <h1>Hola</h1>
      {
        isAuthenticated ?
          <LogoutButton/>
        :
          <LoginButton/>
      }
      
      
      <Profile/>
    </div>
  );
}

export default App;
