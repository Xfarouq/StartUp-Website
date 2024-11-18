import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <h1>Hello welcome</h1>
        <p>Am coming</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
