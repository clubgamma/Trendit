import Hero from '../Hero/Hero'
import logo from '../../Assets/Images/Logo/Trendit-logos_transparent.png';

const Home = () => {
    return (
        <>
            <div className="App-header">
              <Hero/>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
        </>
    );
}

export default Home;