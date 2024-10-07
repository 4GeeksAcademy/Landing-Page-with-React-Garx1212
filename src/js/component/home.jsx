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
			<div className="container mx-auto row">
				<ElCard image="https://picsum.photos/501/325"
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique officia incidunt deserunt voluptatum aperiam?." 
		  />
		  <ElCard image="https://picsum.photos/501/326"
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique officia incidunt deserunt voluptatum aperiam?." 
		  />
		  <ElCard image="https://picsum.photos/501/327"
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique officia incidunt deserunt voluptatum aperiam?." 
		  />
		  <ElCard image="https://picsum.photos/501/328"
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique officia incidunt deserunt voluptatum aperiam?." 
		  />
			</div>
		</div>
			<Footer />
	</div>
	);
};

export default Home;
