import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requestService from "../../services/httpservice";
import "../plantDetail/plantDetail.css";

function PlantDetailDb() {
	const [detail, setDetail] = useState({
		common_name: "",
		date_added_to_list: "",
		date_to_plant: "",
		image_url: "",
		scientific_name: "",
		summary: "",
		quantity: 0,
	});
	let { id } = useParams();

	useEffect(() => {
		requestService.get(`plants/${id}`).then(({ data }) => {
			console.log(data);
			setDetail((detail) => ({
				...detail,
				...data,
			}));
		});
	}, []);

	return (
		<div div className="container">
			<h2 className="text-center mt-2 mb-3">
				{detail.common_name} ({detail.scientific_name})
			</h2>
			<div className="image">
				<img className="plant-image rounded" src={detail.image_url} alt="" />
			</div>
			<div className="detail mt-3">
				<p className="d-flex">
					<h5>quantity </h5> - {detail.quantity}
				</p>
				<p className="d-flex">
					<h5>date_to_plant </h5> - {detail.date_to_plant}
				</p>
				<p className="d-flex">
					<h5>date_added_to_list</h5> - {detail.date_added_to_list.slice(0, 10)}
				</p>
			</div>

			<div className="summary mt-3">
				<h3>Summary</h3>
				<p>{detail.summary}</p>
			</div>
		</div>
	);
}

export default PlantDetailDb;
