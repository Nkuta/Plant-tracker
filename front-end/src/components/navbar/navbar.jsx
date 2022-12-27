import { NavLink, Link } from "react-router-dom";

function Navbar({ username, onLogout }) {
	return (
		<div>
			<nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top pt-2">
				<div className="container">
					<Link to="/" className="navbar-brand text-decoration-none">
						<i className="fas fa-blog"></i> &nbsp; Plant Tracker
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mx-3">
							{username.length > 0 ? (
								<>
									<li className="nav-item">
										<Link
											className="nav-link active mx-3 text-decoration-none"
											to="/"
										>
											home
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link active mx-3 text-decoration-none"
											to="/plant-list"
										>
											plant-list
										</Link>
									</li>
									<li className="nav-item mx-3">
										<Link
											className="nav-link active text-decoration-none"
											to="/plant-search"
										>
											plant-search
										</Link>
									</li>

									<li className="nav-item mx-3">
										<span className="nav-link active text-decoration-none">
											{username}
										</span>
									</li>

									<li className="nav-item">
										<button
											onClick={() => onLogout()}
											className="nav-link btn btn-danger text-white btn-sm text-decoration-none"
										>
											Logout
										</button>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link
											to="/login"
											className="nav-link active text-decoration-none"
										>
											Login
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/signup"
											className="nav-link active text-decoration-none"
										>
											SignUp
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
