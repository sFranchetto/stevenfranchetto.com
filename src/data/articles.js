import React from "react";

function article_1() {
	return {
		date: "September 2020 - April 2024",
		title: "Bachelors of Software Engineering",
		description:
			"Classes ranged from Web Development, Data Structures, Automata Theory, Software Architecture & Design, Requirements Engineering, Black & Whitebox testing, and finally Enterprise applications.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "September 2015 - April 2019",
		title: "Technical Degree in Computer Science and Technology",
		description:
			"Took a technical degree in CEGEP, here is where I mostly learned industry standard best practices and how to write industry-level code. This degree was concluded with a 4 month long internship at Paradem Consulting.",
		style: ``,
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
