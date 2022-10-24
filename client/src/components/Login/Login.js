import React from 'react';
import './Login.css';

const Login = () => {
    return (
		<>

		<div className="Outer">
			<div className="Inner">
				<h1 className="cl">Login</h1>
			</div>

			<div className="contactDiv">
				<div className="Row">
					<div className="loginStyle">
						<form className="formContainer">
							<div className="input_div1">

								<label for="exampleInputEmail1" class="formLabel">
									Email address
								</label>

								<input
									type="email"
									className="input"
									id="exampleInputEmail1"
									name="email"
									required
								/>

							</div>

							<div className="input_div2">

								<label for="exampleInputPassword1" class="formLabel">Password</label>

								<input
									type="password"
									className="input"
									id="exampleInputPassword1"
									name="password"
									required
								/>

							</div>
						<div className="login_out">
							<button type="submit" className="loginB">
								Login
							</button>
						</div>

						</form>

						<div className="ask">
							<h5 className="">Don't have account ?</h5>
						</div>
					</div>

				</div>
			</div>
		</div>
        </>
	)
}

export default Login;
