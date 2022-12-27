import { useState } from "react";
import { Link } from "react-router-dom";
import requestService from "../../services/httpservice";
import TokenService from "../../services/tokenService";
import "../login/login.css";

function SignUp() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const [errors, setErrors] = useState(false);
	const [loading, setLoading] = useState(false);

	const clearForm = () => {
		setUsername("");
		setEmail("");
		setPassword1("");
		setPassword2("");
		setErrors(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(false);
		setLoading(true);
		if (password1 !== password2) {
			alert("passwords did not match");
			setLoading(false);
			return;
		}
		TokenService.clearToken();

		const data = {
			email: email,
			username: username,
			password: password1,
		};
		console.log(data);
		requestService
			.post("auth/users/", data)
			.then((res) => {
				setLoading(false);
				clearForm();
				console.log(res);
				window.location.href = "/login";
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setErrors(true);
				clearForm();
			});

		clearForm();
	};
	return (
		<div className="singUp">
			<div className="container d-flex align-items-center mt-3 outerdiv">
				<div className="wrapper row">
					<div className="wrapper_image col-md-6 col-sm-12 col-lg-6 overflow-hidden">
						<img
							className="img-fluid rounded auth_image"
							style={{ transform: "scale(1.3)", height: "100%" }}
							src="https://inaturalist-open-data.s3.amazonaws.com/photos/38353123/original.jpg"
							alt=""
						/>
					</div>
					<div className="wrapper_form col-md-6 col-sm-12 col-lg-6 my-3 p-3">
						<form onSubmit={handleSubmit} method="post">
							<div className="title mb-3">Sign Up</div>
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
							{errors && (
								<div className="alert alert-danger" role="alert">
									something wrong happened use another email and a strong
									password
								</div>
							)}
							<div className="mb-3">
								<label for="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									name="email"
									className="form-control"
									id="email"
									placeholder="Enter your email"
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="password1" className="form-label">
									Password
								</label>
								<input
									type="password"
									name="password1"
									className="form-control"
									id="password1"
									placeholder="Enter your password"
									onChange={(e) => setPassword1(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="password2" className="form-label">
									Confirm Password
								</label>
								<input
									type="password"
									name="password2"
									class="form-control"
									id="password2"
									placeholder="Confirm your password"
									onChange={(e) => setPassword2(e.target.value)}
									required
								/>
							</div>
							{loading ? (
								<div className="spinner-grow" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							) : (
								<button type="submit" className="btn btn-primary mb-3">
									Sign Up
								</button>
							)}

							<p>
								Already have an account?
								<Link to="/login" className="have_account">
									sign in now
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
