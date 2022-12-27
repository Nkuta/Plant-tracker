import "./home.css";

function Home() {
	return (
		<div className="home container mt-3 mb-5">
			<h2 className="text-center">Homepage</h2>
			<div>
				<div className="image">
					<img
						className="banner-img img-fluid rounded"
						src="src/assets/banner-img.jpg"
						alt=""
					></img>
				</div>
				<div className="quote mt-4 text-center">
					<figure>
						<blockquote className="blockquote">
							<h3>
								"Don't judge each day by the harvest you reap but by the seeds
								that you plant.".
							</h3>
						</blockquote>
						<figcaption className="blockquote-footer mt-2 fs-4">
							Robert Louis Stevenson
						</figcaption>
					</figure>
				</div>
				<div className="login-btns d-flex justify-content-center">
					<button type="button" className="btn btn-primary me-3">
						Sign up
					</button>

					<button className="btn btn-primary">Login</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
