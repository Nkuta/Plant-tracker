import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requestService from "../../services/httpservice";
import "./plantDetail.css";
import TokenService from "../../services/tokenService";

function PlantDetail() {
	const [detail, setDetail] = useState({
		common_name: "",
		scientific_name: "",
		main_species: {
			image_url: "",
		},
		summary: "",
	});
	const [quantity, setQuantity] = useState(0);
	const [date, setDate] = useState("");
	let { id } = useParams();
	const key =
		"Bjv8vv0jROKo0vVMdKWMyDAmMX046ema0M3C6EzcW0Xz-puscQB4gwuGsnTu2hGH";
	let key2 = "CA92rzfmulbjVBVH5mSVRQddQGJ98GhxUbhEeHEH4T2s-u9UTUiszvfjT21CD0Kv";

	const floraUrl = `https://api.floracodex.com/v1/plants/${id}?key=${key2}`;
	const wikiSearchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=`;

	useEffect(() => {
		if (!TokenService.getAccessTokenValidity()) {
			return (window.location.href = "/login");
		}
		fetch(floraUrl)
			.then((res) => res.json())
			.then((data) => {
				setDetail((detail) => ({
					...detail,
					...data,
				}));
				console.log(data.scientific_name);
				let url = wikiSearchUrl + data.scientific_name.replace(" ", "_");
				console.log(url);
				fetch(url)
					.then((res) => res.json())
					.then(({ query }) =>
						setDetail((prev) => ({
							...prev,
							summary: query.search[0].snippet,
						}))
					);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			common_name: detail.common_name,
			scientific_name: detail.scientific_name,
			is_planted: false,
			summary: detail.summary,
			image_url: detail.main_species.image_url,
			quantity: quantity,
			date_to_plant: date,
		};
		requestService.post("plants/", data).then((res) => {
			window.location.href = "/plant-list";
		});
	};

	return (
		<div div className="container">
			<h2 className="text-center mt-2 mb-3">
				{detail.common_name} ({detail.scientific_name})
			</h2>
			<div className="image">
				<img
					className="plant-image rounded"
					src={detail.main_species.image_url}
					alt=""
				/>
			</div>
			<div className="summary mt-3">
				<h3>Summary</h3>
				<p
					className="fs-4"
					dangerouslySetInnerHTML={{ __html: detail.summary }}
				></p>
			</div>
			<div className="add-to-list mt-4">
				<h3 className="mb-3">Add plant to list</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="quantity" className="form-label">
							Quantity of Plants
						</label>
						<input
							type="number"
							className="form-control"
							id="quantity"
							aria-describedby="emailHelp"
							onChange={(e) => setQuantity(e.target.value)}
							required
						/>
						<div id="emailHelp" className="form-text">
							Enter the quantity of plants you wish to add.
						</div>
					</div>
					<div className="mb-3">
						<label htmlFor="date" className="form-label">
							Planned date to plant
						</label>
						<input
							type="date"
							className="form-control"
							id="date"
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>

					<button type="submit" className="btn btn-primary mb-3">
						Add to List
					</button>
				</form>
			</div>
		</div>
	);
}

export default PlantDetail;
