import Hero from '../Hero/Hero'
import './Home.css'


const a=['Keyword1','Keyword2','Keyword3','Keyword4','Keyword5']
const Home = () => {
    return (
        <>
            <div className="App-header">

              <Hero/>

              <div className='toptrending'>
                <h1>TOP Trends</h1>
                <br />
                {a.map((item)=><h3>{item}</h3>)}
                <div className="trend">
                  <h3>Lets see what is trending</h3>
                  <p>in this page you will see trending keywords for all over internet</p>
                  <div className="btn">
                    <a >Explore</a>
                  </div>
                </div>
                <hr/>
              </div>

            </div>
        </>
    );
}

export default Home;