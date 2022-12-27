import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requestService from "../../services/httpservice";
import "../plantSearcher/plantSearcher.css";

function PlantTrackerList() {
	const [plantsList, setPlantsList] = useState([]);

	useEffect(() => {
		requestService.get("plants").then(({ data }) => {
			setPlantsList(data);
			console.log(data);
		});
	}, []);
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
									<div className="card-read-more">
										<Link
											to={"/plant-detail-db/" + plant.id}
											className="btn btn-link btn-block"
										>
											Plant-detail
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="add-more text-center">
					<button className="btn btn-success mt-4">
						Add more to your plant list
					</button>
				</div>
			</div>
		</div>
	);
}

export default PlantTrackerList;
