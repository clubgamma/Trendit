import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({
      theme: newTheme
    });
    localStorage.setItem('theme',newTheme);
  }
  render() {
    return (
      <div className={'App ' + this.state.theme}>
        <Navbar switchTheme={this.toggleTheme} theme={this.state.theme} />
        <Home theme={this.state.theme} />
        <Footer theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
