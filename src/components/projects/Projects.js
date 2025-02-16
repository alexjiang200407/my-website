import React from "react";
import WebPage from "../base_page/webpage";
import quotifyLogo from "../../images/book-512.png"
import toggleEquipLogo from "../../images/toggle-equip.png"
import './project.scss'
import LinkList from "../link_list/link_list";

export default class Projects extends WebPage
{
	render()
	{
		return (
			<div id="projects">
				<div className="title-card center-horizontal">
					<h1>Portfolio</h1>
					<div className="responsive-flex-container">
						<div>
							<img
								alt="Quotify Logo"
								src={quotifyLogo}
							/>
							<h2>Quotify</h2>
							<p>Web application for curating quotations.</p>
							<ul>
								<li>Role: Project Lead & Full-Stack Developer</li>
								<li>Developed a Single Page Application (SPA) using React and Material UI.</li>
								<li>Built a backend with PHP Laravel and a MySQL database.</li>
								<li>Deployed on an Oracle Cloud Virtual Machine (VM) with Infrastructure-as-Code principles.</li>
							</ul>
							<LinkList
								links={[
									{
										title: "Source",
										to: "https://github.com/alexjiang200407/quotify",
										openToNew: true,
									},
									{
										title: "Website",
										to: "https://quotify.strangled.net/",
										openToNew: true,
									},
									{
										title: "IaC",
										to: "https://github.com/alexjiang200407/quotify-vagrant",
										openToNew: true,
									},
								]}
							/>
						</div>
						<div>
							<img
								alt="ToggleEquip Logo"
								src={toggleEquipLogo}
							/>
							<h2>ToggleEquip</h2>
							<p>C++ Plugin for Fallout 4 with over 100K total downloads</p>
							<ul>
								<li>Role: Sole Developer</li>
								<li>Reverse-engineered Fallout 4, using x64dbg and Cheat Engine to identify memory addresses.</li>
								<li>Hooked game functions using C++, modifying in-game behavior at runtime.</li>
							</ul>
							<br />
							<br />
							<LinkList
								links={[
									{
										title: "Source",
										to: "https://github.com/alexjiang200407/ToggleEquipFO4",
										openToNew: true,
									},
									{
										title: "Nexus Mods Download",
										to: "https://www.nexusmods.com/fallout4/mods/83024",
										openToNew: true,
									},
								]}
							/>

						</div>
						<div>
							<img
								alt="Labyrinth Logo"
								src="https://preview.redd.it/today-i-learned-that-sigma-is-a-math-term-v0-hh3r81ixk4yd1.jpg?width=640&crop=smart&auto=webp&s=959245717bc20094dcd20e3135bd2b25112cad00"
							/>
							<h2>Sigma</h2>
							<p>High School Timetable Software.</p>
							<ul>
								<li>Role: Front-End Developer</li>
								<li>Timetable, Calendar and Motivation app</li>
							</ul>
							<br />
							<br />
							<br />
							<br />
							<br />
							<LinkList
								links={[
									{
										title: "Website",
										to: "https://sigmav1.pages.dev/",
										openToNew: true,
									},
								]}
							/>

						</div>
					</div>
				</div>
			</div>
		)
	}
}