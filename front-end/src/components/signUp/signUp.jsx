import '../login/login.css'
function SignUp() {
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
						<form action="" method="post">
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
									required
								/>
							</div>
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
									required
								/>
							</div>
							<button type="submit" class="btn btn-primary mb-3">
								Sign Up
							</button>
							<p>
								Already have an account?
								<a href="" class="have_account">
									sign in now
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
