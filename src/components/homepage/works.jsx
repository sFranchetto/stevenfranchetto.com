import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./paradem.jpg"
								alt="paradem"
								className="work-image"
							/>
							<div className="work-title">Paradem Consulting</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2018 - 2018</div>
						</div>

						<div className="work">
							<img
								src="./EMSB_Circle_Logo.jpg"
								alt="emsb"
								className="work-image"
							/>
							<div className="work-title">English Montreal School Board</div>
							<div className="work-subtitle">
								Teaching Assistant
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./phz.PNG"
								alt="pharmaprix"
								className="work-image"
							/>
							<div className="work-title">Pharmaprix</div>
							<div className="work-subtitle">
								Floor Clerk
							</div>
							<div className="work-duration">2019 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
