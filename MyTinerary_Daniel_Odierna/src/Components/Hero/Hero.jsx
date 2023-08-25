import '../Hero/heroCSS.css'
import { Link as Anchor } from 'react-router-dom'




function Hero() {
    return(
        <div className="hero">
            <div><h1>Find the perfect destination</h1></div>
            <div><p>Our app help you find the perfect paht for your next trip. <br /> With an easy-to-use interface and a host <br /> o itinerary
            options, planning your next trip has never <br /> been easier.
        </p></div>
            <div> <Anchor to="/cities">
           
                <button type="button" className="mainButtonHero">Let's take a trip... </button>
            </Anchor></div>
    </div>
    );
}
export default Hero