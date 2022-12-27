import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import PlantDetail from "./components/plantDetail/PlantDetail";
import PlantSearcher from "./components/plantSearcher/plantSearcher";
import PlantTrackerList from "./components/plantTrackerList/plantTrackerList";
import Home from "./components/home/home";
import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";
import PlantDetailDb from "./components/plantDetailDb/plantDetailDb";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/plant-list" element={<PlantTrackerList />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/plant-search" element={<PlantSearcher />} />
				<Route path="/" element={<Home />} />
				<Route path="/plant-detail/:id" element={<PlantDetail />} />
				<Route path="/plant-detail-db/:id" element={<PlantDetailDb />} />
				<Route path="*" element={<h1>404 not found</h1>} />
			</Routes>
		</div>
	);
}

export default App;
