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
requestService.interceptors.response.use(
	(response) => response,
	(error) => {
		const valid = TokenService.getRefreshTokenValidity();

		if (!valid) {
			TokenService.clearToken();
		}
		return Promise.reject(error);
	}
);

export default requestService;
