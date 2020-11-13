// libraries imports
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// Components import
import Navbar from "./Components/Navigationsbar/Navbar";

// pages imports
import Welcome from "./Pages/Welcome";
import Library from "./Pages/Library";
import Eshop from "./Pages/Eshop";
import Profile from "./Pages/Profile";
import Blogspot from "./Pages/Blogspot";

function App() {
	return (
		<div class=' '>
			<BrowserRouter>
				<Navbar />
				<div class=''>
					<Switch>
						<Redirect from='/' to='/Welcome' exact />
						<Route path='/Welcome' component={Welcome} />
						<Route path='/Library' component={Library} />
						<Route path='/Eshop' component={Eshop} />
						<Route path='/Profile' component={Profile} />
						<Route path='/Blogspot' component={Blogspot} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
