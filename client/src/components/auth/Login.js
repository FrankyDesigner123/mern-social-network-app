import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const onSubmit = async (e) => {
		e.preventDefault();

		console.log('User logged in.');
	};

	return (
		<Fragment>
			<h1 className="lage text-primary">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"> Sign in to Your Account</i>
			</p>
			<form onSubmit={(e) => onSubmit(e)} className="form">
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
						minLength="6"
					/>
				</div>

				<input type="submit" className="btn btn-primary" value="Login" />
			</form>
			<p className="my-1">
				Dont't have an account? <Link to="/register">Sign Up</Link>
			</p>
		</Fragment>
	);
};

export default Login;
