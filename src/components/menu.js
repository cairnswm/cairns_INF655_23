

import Tasks from "../pages/tasks";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "../pages/about"
import Dashboard from "../pages/dashboard"

function Menu() {
	return (
		<div className='row'>
			<div className='col-3'>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About</NavLink>
						</li>
						<li>
							<NavLink to='/dashboard'>Dashboard</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<main className='col-9' >
                <div style={{padding:"10px"}}>
				<Routes>
					<Route index element={<Tasks />} />
					<Route path='about' element={<About />} />
					<Route path='dashboard' element={<Dashboard />} />
				</Routes>
                </div>
			</main>
		</div>
	);
}

export default Menu;
