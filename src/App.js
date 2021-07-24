import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar/avatar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Avatar src="https://media.istockphoto.com/vectors/flag-ribbon-welcome-old-school-flag-banner-vector-id1223088904?k=6&m=1223088904&s=612x612&w=0&h=85cJx9_OuxIn6pHeXrL6PWo1ro5mg1yH0vov5nF9uig=" />
      
    </div>
  );
}

export default App;
