import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
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
      <div className="{'App ' + this.state.theme}">
        <Router>
          <div>
            <Navbar switchTheme={this.toggleTheme} theme={this.state.theme} />
            <Routes>
              <Route path="/" element={<Home theme={this.state.theme} />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
        </Router>
        <Footer theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
