import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar bg-fark">
			<h1>
				<a href="index.html">
					<i className="fas fa-code"> &nbsp; MERN</i>
				</a>
			</h1>
			<ul>
				<li>
					<a href="profiles.html">Developers</a>
					<a href="register.html">Regiser</a>
					<a href="login.html">Login</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
