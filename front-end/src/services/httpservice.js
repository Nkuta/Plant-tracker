import axios from "axios";
import TokenService from "./tokenService";

const requestService = axios.create({
	baseURL: "http://localhost:8000/",
});

requestService.interceptors.request.use(
	(config) => {
		const token = TokenService.getAccessToken();
		if (token) {
			config.headers.Authorization = `JWT ${token}`;
        }
		
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default requestService;
