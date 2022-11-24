import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Characters  from "./component/characters"
import Planets from "./component/planets";
import Vehicles from "./component/vehicles"

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import CharDetails from "./views/CharDetails.jsx";
import PlanetsDetails from "./views/PlanetsDetails.jsx";
import VehiclesDetails from "./views/VehiclesDetails.jsx";


import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/CharDetails/:id">
							<CharDetails />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/PlanetsDetails/:id">
							<PlanetsDetails />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/VehiclesDetails/:id">
							<VehiclesDetails />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
