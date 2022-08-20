import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './Contents/MenuBar';
import { Home } from './Contents/Home';


function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Home/>
    </div>
  );
}

export default App;
