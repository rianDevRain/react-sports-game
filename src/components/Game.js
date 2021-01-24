import Team from './Team';
import Logo1 from '../images/pic1.jpg';
import Logo2 from '../images/pic2.jpg';


const Game = (props) => {
   return( 
   <div className="Game">
        <h1>Welcome to {props.venue}</h1>
        <div>
            <div>
                <Team name="Voodoo Boys" logo={Logo1}/>
            </div>
            <div>
                <Team name="The Mox" logo={Logo2}/>
            </div>
        </div>
    </div>
   );
}
export default Game