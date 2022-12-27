import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
	const [randomQuote, setRandomQuote] = useState({
		quote: "",
		author: "",
	});
	// let url = "https://zenquotes.io/api/random";
	let url2 = "https://api.api-ninjas.com/v1/quotes?category=environmental";
	let api = "pzzDL+Kd5VIONw480mXkow==5I7c5FpFN3MV57cf";

	useEffect(() => {
		fetch(url2, { headers: { "X-Api-Key": api } })
			.then((res) => res.json())
			.then((data) => {
				console.log(data[0]);
				setRandomQuote((prev) => ({
					quote: data[0].quote,
					author: data[0].author,
				}));
			});
	}, []);
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
					<h2 className="text-center my-3">Random quote</h2>
					<figure>
						<blockquote className="blockquote">
							<h3>{randomQuote.quote}</h3>
						</blockquote>
						<figcaption className="blockquote-footer mt-2 fs-4">
							{randomQuote.author}
						</figcaption>
					</figure>
				</div>
				<div className="login-btns d-flex justify-content-center">
					<button type="button" className="btn btn-primary me-3">
						<Link to="/signup" className="text-white text-decoration-none">
							Sign up
						</Link>
					</button>

					<button className="btn btn-primary">
						<Link to="/login" className="text-white text-decoration-none">
							Login
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
