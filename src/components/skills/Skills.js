import React from "react";
import WebPage from "../base_page/webpage";
import './skills.scss'


export default class Skills extends WebPage
{
	render()
	{
		return (
			<div id="skills">
				<div className="title-card center-horizontal">
					<h1>Technical Skills</h1>
					<div className="responsive-flex-container">
						<div className="skills-list-box">
							<h2>Full-Stack Development</h2>
							<ul>
								<li><strong>Frontend:</strong> 5+ years of experience with JavaScript, TypeScript, CSS/SCSS, React, Vue.</li>
								<li><strong>Backend:</strong> Development using PHP, Laravel, ExpressJS.</li>
								<li><strong>Databases:</strong> MySQL, PostgreSQL, SQL Server.</li>
							</ul>
						</div>

						<div className="skills-list-box">
							<h2>DevOps & Infrastructure</h2>
							<ul>
								<li>Automated server/virtual machine provisioning using Ansible.</li>
								<li>Set up cloud services: Oracle Cloud, AWS, Microsoft Azure, Vercel.</li>
								<li>Configured virtual development environments using Vagrant.</li>
								<li>Configured and optimized Nginx and Apache2 for web server deployment.</li>
							</ul>
						</div>

						<div className="skills-list-box">
							<h2>Scripting & System Programming</h2>
							<ul>
								<li>Python, Shell scripting, and familiarity with Regular Expressions (RegExp).</li>
							</ul>
						</div>

						<div className="skills-list-box">
							<h2>Software & Game Development</h2>
							<ul>
								<li>Application development using Java, C++, C, CMake.</li>
								<li>Reverse engineering for plugin development using x64dbg, Cheat Engine.</li>
								<li>Graphics & Windows Development: DirectX (Direct3D), WinAPI (Windows SDK).</li>
								<li>Unreal Engine Game Development</li>
							</ul>
						</div>

						<div className="skills-list-box">
							<h2>Other Technical Skills</h2>
							<ul>
								<li><strong>Version Control:</strong> Git</li>
								<li><strong>Development Methodologies:</strong> Agile</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
