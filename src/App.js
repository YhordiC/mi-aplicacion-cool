import logo from './logo.svg';
import './App.css';


import ContactList from './component/container/ContactList';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
    
      </header>
      
      <ContactList></ContactList>
    </div>
  );
}

export default App;
