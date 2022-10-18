import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import AboutUS from './components/AboutUs/AboutUs';
import FacebookTrend from './components/Trends/Facebook/FacebookTrend';
import GoogleTrend from './components/Trends/Google/GoogleTrend';
import InstagramTrend from './components/Trends/Instagram/InstagramTrend';
import TwitterTrend from './components/Trends/Twitter/TwitterTrend';


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
        <Router>
          <div>
            <Navbar switchTheme={this.toggleTheme} theme={this.state.theme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs theme={this.state.theme} />} />
              <Route path="/about-us" element={<AboutUS  theme={this.state.theme}/>} />
              <Route path="/facebook-trend" element={<FacebookTrend/>}/>
              <Route path="/twitter-trend" element={<TwitterTrend/>}/>
              <Route path="/instagram-trend" element={<InstagramTrend/>}/>
              <Route path="/google-trend" element={<GoogleTrend/>}/>
            </Routes>
          </div>
        </Router>
        <Footer theme={this.state.theme} />
      </div>
    );
  }
}

export default App;
