import logo from '../../Assets/Images/Logo/Trendit-logos_transparent.png';

const Home = (props) => {
    return (
        <>
            <div className={'App-header ' + props.theme}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Trendit Coming soon...
                </p>
            </div>
        </>
    );
}

export default Home;