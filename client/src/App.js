import logo from './Assets/Images/Logo/Trendit-logos_transparent.png';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      //have to add a footer
    </div>
  );
}

export default App;
