import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requestService from "../../services/httpservice";
import "../plantSearcher/plantSearcher.css";
import TokenService from "../../services/tokenService";

function PlantTrackerList({ username }) {
	const [plantsList, setPlantsList] = useState([]);

	useEffect(() => {
		if (!TokenService.getAccessTokenValidity()) {
			console.log(username);
			return (window.location.href = "/login");
		}
		requestService.get("plants").then(({ data }) => {
			setPlantsList(data);
			console.log(data);
		});
	}, []);

	const handleDelete = (id) => {
		// console.log("delete", id);
		let plants = plantsList;
		requestService
			.delete(`plants/${id}/`)
			.then((res) => setPlantsList(plantsList.filter((p) => p.id !== id)))
			.catch((err) => setPlantsList(plants));
	};

	return (
		<div className="list container mt-3">
			<div className="content">
				<h2 className="text-center">Available Plants In your list</h2>
				<div className="results row mt-3">
					{plantsList.map((plant, index) => (
						<div
							key={index}
							className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mb-3"
						>
							<div className="card">
								<Link to={"/plant-detail-db/" + plant.id} className="img-card">
									<img className="card-image" src={plant.image_url} alt="" />
								</Link>
								<div className="card-content p-2">
									<h4 className="card-title">{plant.common_name}</h4>
									<p>scientific_name- {plant.scientific_name}</p>
									<p>
										date added to list :{plant.date_added_to_list.slice(0, 10)}
									</p>

									<p>date to plant: {plant.date_to_plant}</p>
									<div className="d-flex justify-content-between align-items-center">
										<div className="card-read-more">
											<Link
												to={"/plant-detail-db/" + plant.id}
												className="btn btn-link btn-block"
											>
												Plant-detail
											</Link>
										</div>
										<div className="delete">
											<button
												onClick={() => handleDelete(plant.id)}
												className="btn btn-danger btn-sm"
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="add-more text-center">
					<Link to="/plant-search" className="btn btn-success mt-4">
						Add or find plants to add to your plant list
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PlantTrackerList;
