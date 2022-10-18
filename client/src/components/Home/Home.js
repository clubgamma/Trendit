import Hero from '../Hero/Hero'

const Home = () => {
    return (
        <>
            <div className="App-header">

              <Hero/>

              <div className='toptrending'>
                <h2>TOP Trends</h2>
                <hr/>
              </div>

            </div>
        </>
    );
}

export default Home;