import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';

const Signup = () => {
    return (
		<>
		<div className="s_Outer">
			<div className="s_Inner">
				<h1 className="s_cl">Signup</h1>
			</div>

			<div className="s_contactDiv">
				<div className="s_Row">
					<div className="s_loginStyle">
						<form className="s_formContainer">
							<div className="s_input_div1">

								<label class="formLabel">
									Name
								</label>

								<input
									type="name"
									className="s_input"
									name="name"
									required
								/>

							</div>
							<div className="s_input_div1">

								<label for="exampleInputEmail1" class="formLabel">
									Email address
								</label>

								<input
									type="email"
									className="s_input"
									id="exampleInputEmail1"
									name="email"
									required
								/>

							</div>

							<div className="s_input_div2">

								<label for="exampleInputPassword1" class="formLabel">Enter Password</label>

								<input
									type="password"
									className="s_input"
									id="exampleInputPassword1"
									name="password"
									required
								/>

							</div>

							<div className="s_input_div2">

								<label for="exampleInputPassword1" class="formLabel">Confirm Password</label>

								<input
									type="password"
									className="s_input"
									id="exampleInputPassword1"
									name="password"
									required
								/>

							</div>
						<div className="s_login_out">
							<button type="submit" className="s_loginB">
								Signup
							</button>
						</div>

						</form>

						<div className="s_ask">
							<h5 className="s_">Already Have An Account ?</h5>
							<NavLink className="s_reg" aria-current="page" to="/login">Login</NavLink>
						</div>
					</div>

				</div>
			</div>
		</div>
		</>
	)
}

export default Signup;