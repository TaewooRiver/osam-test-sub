import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Don't Edit <code>src/App.js</code> and save to reload.
        </p>
				
				<p>
				  Fighter Jets
				</p>
		  	<p>
				{ console.log("Update from osam-test(not sub!)") }
		  	</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
