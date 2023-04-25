import { useState, createContext } from 'react';
import Page from './component/Page';
import './App.css';

export const UserStatus = createContext(null)


function App() {
  const [signedIn, setSignedIn] = useState(false)
  return (
    <>
    <UserStatus.Provider value={[signedIn, setSignedIn]}>
      <h1>{signedIn ? "Click below to sign in" : "Click below to sign out" }</h1>
      <Page />
      </UserStatus.Provider>
    </>
  );
}

export default App;
