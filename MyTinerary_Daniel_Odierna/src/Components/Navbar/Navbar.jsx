import './navbar.css'
import { Link as Anchor } from 'react-router-dom'
function Navbar() {
    return (

        <nav>
            <div className='buttonContainerNav'>

                <Anchor to={"/"}>
                    
                     <button type="button" className="mainButton" >Home</button> 
                </Anchor>

                <Anchor to={"/cities"}>
                
                <button type="button" className="mainButton">Cities</button>
                </Anchor>

                <Anchor to ={""}>
               
                    <button type="button" className="mainButtonLogin">Login</button>
                </Anchor>



            </div>
        </nav>

    );
}
export default Navbar