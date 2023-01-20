import './App.css';
import Navbar from './components/Navbar';
import banner from './images/banner.jpg'

function App() {
  return (
    <div className="App">
      <div className='App-bannerbg'>
        <Navbar/>
          <div className='App-about container-fluid d-flex align-items-center justify-content-center'>
              <h1>Texto épico a lo Rocky Balboa IV</h1>
          </div>
      </div>
        
    </div>
  );
}

export default App;
