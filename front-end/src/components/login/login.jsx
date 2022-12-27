import { useEffect, useState } from "react";
import { Link,Navigate } from "react-router-dom";
import "./login.css";
import requestService from "../../services/httpservice";
import TokenService from "../../services/tokenService";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const url = "auth/jwt/create";


	useEffect(() => {
		TokenService.clearToken()
	},[])

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = {
			username: username,
			password: password,
		};
		requestService
			.post(url, data)
			.then(({data}) => {
				console.log(data);
				TokenService.setToken(data)
				error && setError(!error);
				window.location.href ='/'
				
			})
			.catch((err) => setError(!error));
	};

	return (
		<div className="login">
			<div className="container d-flex align-items-center outerdiv">
				<div className="wrapper row">
					<div className="wrapper_image col-md-6 col-sm-12 col-lg-6 overflow-hidden">
						<img
							className="img-fluid rounded"
							style={{ height: "100%", transform: "scale(1.3)" }}
							src="https://inaturalist-open-data.s3.amazonaws.com/photos/4767490/original.jpg"
							alt="login cover image"
						/>
					</div>
					<div className="wrapper_form col-md-6 col-sm-12 col-lg-6 mb-3 my-5 p-5">
						<form onSubmit={handleSubmit}>
							<div className="title mb-3">Sign in</div>
							{error && (
								<div className="alert alert-danger" role="alert">
									Something wrong happened try again!
								</div>
							)}
							<div className="mb-3">
								<label htmlFor="username" className="form-label">
									Username
								</label>
								<input
									type="text"
									name="username"
									className="form-control"
									id="username"
									placeholder="Enter your username"
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<input
									type="password"
									name="password"
									className="form-control"
									id="password"
									placeholder="Enter your password"
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<button type="submit" className="btn btn-primary mb-4 mt-2">
								Sign in
							</button>
							<p>
								Don't have an account?
								<Link to="/signup" className="have_account">
									sign up now
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
