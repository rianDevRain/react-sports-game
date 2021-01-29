/** @format */
import React from 'react'
import  Game  from "../src/components/Game";
import "./App.css";
import Logo1 from './images/pic1.jpg';
import Logo2 from '../src/images/pic2.jpg';
import Logo3 from '../src/images/pic3.jpg';
import Logo4 from '../src/images/pic4.jpg';



function App(props) {
	const voodoo = {
		name: 'Voodoo Boys',
		logoSrc: Logo1
	}
	const mox = {
		name: 'The Mox',
		logoSrc: Logo2
	}
	const alde = {
		name: 'Aldecaldos',
		logoSrc: Logo3
	}
	const tyger = {
		name: 'Tyger Claws',
		logoSrc: Logo4
	}
	return (
		<div className="App">
			<Game 
				venue="Night City"
				homeTeam={voodoo}
				visitingTeam={mox} 

				/>
			<Game 
				venue="The Badlands"
				homeTeam={alde}
				visitingTeam={tyger} 

				/>
		</div>
	);
};

export default App;
