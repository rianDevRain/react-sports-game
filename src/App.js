/** @format */

import Game from "./components/Game";

import "./App.css";

const App = (props) => {
	return (
		<div className="App">
			<Game venue="Night City" />
			<Game venue="The Badlands" />
		</div>
	);
};

export default App;
