import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./plantSearcher.css";

function PlantSearcher() {
	// key should be hidden
	const key =
		"Bjv8vv0jROKo0vVMdKWMyDAmMX046ema0M3C6EzcW0Xz-puscQB4gwuGsnTu2hGH";

	// Flora endpoint to get the plants
	const floraUrl = `https://api.floracodex.com/v1/plants?key=${key}&q=`;

	const [searchValue, setSearchValue] = useState("");
	const [foundPlants, setfoundPlants] = useState([]);

	const fetchPlants = (e) => {
		if (e.keyCode === 13) {
			let formatedString = searchValue.replace(" ", "+");
			let url = floraUrl + formatedString;

			fetch(url)
				.then((res) => res.json())
				.then(({ data }) =>
					setfoundPlants(
						data.filter((p) => (p["image_url"] ? true : false))
					)
				);
			
		}
	};
	return (
		<div className="plant-searcher container mt-3">
			<div className="search">
				<form onSubmit={(e) => e.preventDefault()}>
					<label htmlFor="search" className="form-label">
						Search for a plant
					</label>
					<input
						type="search"
						value={searchValue}
						id="search"
						className="form-control"
						onKeyDown={fetchPlants}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</form>
			</div>
			<div className="results row mt-3">
				{foundPlants.map((plant, index) => (
					<div
						key={index}
						className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3"
					>
						<div className="card">
							<Link to={"/plant-detail/" + plant.id} className="img-card">
								<img className="card-image" src={plant.image_url} alt="" />
							</Link>
							<div className="card-content p-2">
								<h4 className="card-title">{plant.common_name}</h4>
								<p>scientific_name- {plant.scientific_name}</p>
								<div className="card-read-more">
									<Link
										to={"/plant-detail/" + plant.id}
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
		</div>
	);
}

export default PlantSearcher;
