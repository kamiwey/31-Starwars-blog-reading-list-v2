import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetsDetails = () => {
	const {store, actions} = useContext(Context);
    const {id} = useParams();    

	useEffect(() => {
        console.log(id);
        actions.getPlanetsDetails(id);
    }, []);

	if (store.planetDetails) {
		return (
			<div className="jumbotron">


			{/* card */}
			<div className="card mb-3" style={{ maxWidth: "60%", margin: "auto", background: "#282727"}}>
				<div className="row g-0">
					<div className="col-md-3">
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title text-light"></h2>
							<p className="textCard card-text text-light">orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
							<p className="card-text text-light"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
				<div className="singleViewDetails container text-center">
					<div className="row row-cols-6">
						<div className="spacer col text-light"><h5>Name</h5><h5>{store.planetDetails.properties.name}</h5></div>
						<div className="spacer col text-light"><h5>Population</h5><h5>{store.planetDetails.properties.population}</h5></div>
						<div className="spacer col text-light"><h5>Rotation Period</h5><h5>{store.planetDetails.properties.rotation_period}</h5></div>
						<div className="spacer col text-light"><h5>Surface Water</h5><h5>{store.planetDetails.properties.surface_water}</h5></div>
						<div className="spacer col text-light"><h5>Gravity</h5><h5>{store.planetDetails.properties.gravity}</h5></div>
						<div className="onlyUp col text-light"><h5>Climate</h5><h5>{store.planetDetails.properties.climate}</h5></div>
					</div>
				</div>
			</div>
			
		</div>
	)}
	else {
        return <div className="text-light text-center mt-5">Loading please wait...</div>;
      }
};

export default PlanetsDetails