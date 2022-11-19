import React from 'react';
import HomePage from "./HomePage"
import About from "./AboutPage"
import Portfolio from "./PortfolioPage"
import StellaPage from "./StellaPage"
import Contact from "./ContactPage"
import ResumePage from './ResumePage';

const Main = () => (
	<main>
		<HomePage />
		<About />
		<ResumePage/>
        <Portfolio />
        <StellaPage/>
		<Contact />
	</main>
);

export default Main;