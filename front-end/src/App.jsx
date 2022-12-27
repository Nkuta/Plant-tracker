import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import PlantDetail from "./components/plantDetail/PlantDetail";
import PlantSearcher from "./components/plantSearcher/plantSearcher";
import PlantTrackerList from "./components/plantTrackerList/plantTrackerList";
import Home from "./components/home/home";
import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";
import PlantDetailDb from "./components/plantDetailDb/plantDetailDb";
import requestService from "./services/httpservice";
import TokenService from "./services/tokenService";
import "./App.css";

function App() {
	const [user, setUser] = useState({
		email: "",
		username: "",
	});

	useEffect(() => {
		requestService
			.get("auth/users/me/")
			.then(({ data }) =>
				setUser((prev) => ({
					...prev,
					...data,
				}))
			)
			.catch((err) => {
				let newData = { email: "", username: "" };
				setUser((prev) => ({
					...newData,
				}));
			});
	}, []);

	const handleLogout = () => {
		TokenService.clearToken();
		setUser((prev) => ({
			email: "",
			username: "",
		}));
		window.location.href = "/login";
		console.log("clicked");
	};

	return (
		<div className="App">
			<Navbar onLogout={handleLogout} username={user.username} />

			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<h1>404 not found</h1>} />
				<Route path="/" element={<Home />} />
				<Route
					path="/plant-list"
					username={user.username}
					element={<PlantTrackerList />}
				/>
				<Route
					path="/plant-search"
					username={user.username}
					element={<PlantSearcher />}
				/>
				<Route
					path="/plant-detail/:id"
					username={user.username}
					element={<PlantDetail />}
				/>
				<Route
					path="/plant-detail-db/:id"
					username={user.username}
					element={<PlantDetailDb />}
				/>
			</Routes>
		</div>
	);
}

export default App;
