import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import ElCard from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
			<Landing />
		</div>
			<Footer />
	</div>
	);
};

export default Home;
