import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
