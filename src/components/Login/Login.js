import React, { Component } from 'react';
import { formValidation } from "../../helpers/validation";
import './Login.css';
import BGimage from '../../img/bg-01.jpg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginVisibility: "",
            registrationVisibility: "styleHidden",

            inputValues: {
                usernameLogin: "",
                passwordLogin: "",
                usernameRegistration: "",
                emailRegistration: "",
                passwordRegistration: "",
                passwordConfirmRegistration: "",
            },

            errorMessage: {
                usernameLogin: "",
                passwordLogin: "",
                usernameRegistration: "",
                emailRegistration: "",
                passwordRegistration: "",
                passwordConfirmRegistration: "",
            },

            errorVisibility: {
                usernameLogin: {
                    visibility: "hidden",
                },
                passwordLogin: {
                    visibility: "hidden",
                },
                usernameRegistration: {
                    visibility: "hidden",
                },
                emailRegistration: {
                    visibility: "hidden",
                },
                passwordRegistration: {
                    visibility: "hidden",
                },
                passwordConfirmRegistration: {
                    visibility: "hidden",
                },
            },

            errorBorder: {
                usernameLogin: {
                    borderBottom: "2px solid rgba(255,255,255,0.24)",
                },
                passwordLogin: {
                    borderBottom: "2px solid rgba(255,255,255,0.24)",
                },
                usernameRegistration: {
                    borderBottom: "2px solid rgba(255,255,255,0.24)",
                },
                emailRegistration: {
                    borderBottom: "2px solid rgba(255,255,255,0.24)",
                },
                passwordRegistration: {
                    borderBottom: "2px solid rgba(255,255,255,0.24)",
                },
                passwordConfirmRegistration: {
                    borderBottom: "2px solid rgba(255,255,255,0.24)",
                },
            },
        };

        this.showLoginForm = this.showLoginForm.bind(this);
        this.showRegistrationForm = this.showRegistrationForm.bind(this);
        this.handleFormInput = this.handleFormInput.bind(this);
    }

    handleFormInput = (e) => {
        const {
            name,
            value,
        } = e.target;
        const {
            errorMessage,
            errorBorder,
            errorVisibility,
            inputValues,
        } = this.state;
        const isValid = formValidation(name, value);

        if(isValid.status === 'success') {
            if(name === "passwordConfirmRegistration" && value !== inputValues.passwordRegistration) {
                this.setState({
                    errorMessage: {
                        ...errorMessage,
                        [name]: "passwords does not match",
                    },
                    errorVisibility: {
                        ...errorVisibility,
                        [name]: {
                            visibility: "visible",
                        }
                    },
                    errorBorder: {
                        ...errorBorder,
                        [name]: {
                            borderBottom: "2px solid red",
                        }
                    },
                });
                return;
            }
            this.setState({
                inputValues: {
                    ...inputValues,
                    [name]: value,
                },
                errorMessage: {
                    ...errorMessage,
                    [name]: "",
                },
                errorVisibility: {
                    ...errorVisibility,
                    [name]: {
                        visibility: "hidden",
                    }
                },
                errorBorder: {
                    ...errorBorder,
                    [name]: {
                        borderBottom: "2px solid rgba(255,255,255,0.24)",
                    }
                },
            })
        } else {
            this.setState({
                errorMessage: {
                    ...errorMessage,
                    [name]: isValid.error,
                },
                errorVisibility: {
                    ...errorVisibility,
                    [name]: {
                        visibility: "visible",
                    }
                },
                errorBorder: {
                    ...errorBorder,
                    [name]: {
                        borderBottom: "2px solid red",
                    }
                },
            })
        }
    };

    showLoginForm = () => {
        const {
            registrationVisibility,
        } = this.state;

        if(registrationVisibility === "") {
            this.setState({
                registrationVisibility: "styleHidden",
                loginVisibility: "",
            })
        }
    };

    showRegistrationForm = () => {
        const {
            loginVisibility,
        } = this.state;

        if(loginVisibility === "") {
            this.setState({
                loginVisibility: "styleHidden",
                registrationVisibility: "",
            })
        }
    };

    render() {
        const {
            loginVisibility,
            registrationVisibility,
            errorBorder,
            errorMessage,
            errorVisibility,
        } = this.state;

        return (
            <React.Fragment>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-category">
                            <div className="category-login" onClick={this.showLoginForm}>
                                Log in
                            </div>
                            <div className="category-register" onClick={this.showRegistrationForm}>
                                Register
                            </div>
                        </div>
                        <div className={`wrap-login100 ${loginVisibility}`}>
                            <form className="login100-form validate-form">
                                <span className="login100-form-logo">
						            <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
					            </span>
                                <span className="login100-form-title p-b-34 p-t-27">
						            Log in
					            </span>
                                <div className="wrap-input100 validate-input" data-validate="Enter username" style={errorBorder.usernameLogin}>
                                    <input className="input100" type="text" name="usernameLogin" onChange={this.handleFormInput} placeholder="Username"/>
                                </div>
                                <div className="error-validate" style={errorVisibility.usernameLogin}>
                                    {errorMessage.usernameLogin}
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Enter password" style={errorBorder.passwordLogin}>
                                    <input className="input100" type="password" name="passwordLogin" onChange={this.handleFormInput} placeholder="Password"/>
                                </div>
                                <div className="error-validate" style={errorVisibility.passwordLogin}>
                                    {errorMessage.passwordLogin}
                                </div>
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Remember me
                                    </label>
                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className={`wrap-register100 ${registrationVisibility}`}>
                            <form className="login100-form validate-form">
                                <span className="login100-form-logo">
						            <i className="zmdi zmdi-account-add"></i>
					            </span>
                                <span className="login100-form-title p-b-34 p-t-27">
                                    Registration
					            </span>
                                <div className="wrap-input100 validate-input" data-validate="Enter username" style={errorBorder.usernameRegistration}>
                                    <input className="input100" type="text" name="usernameRegistration" onChange={this.handleFormInput} placeholder="Username"/>
                                </div>
                                <div className="error-validate" style={errorVisibility.usernameRegistration}>
                                    {errorMessage.usernameRegistration}
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Enter username" style={errorBorder.emailRegistration}>
                                    <input className="input100" type="email" name="emailRegistration" onChange={this.handleFormInput} placeholder="Email"/>
                                </div>
                                <div className="error-validate" style={errorVisibility.emailRegistration}>
                                    {errorMessage.emailRegistration}
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Enter password" style={errorBorder.passwordRegistration}>
                                    <input className="input100" type="password" name="passwordRegistration" onChange={this.handleFormInput} placeholder="Password"/>
                                </div>
                                <div className="error-validate" style={errorVisibility.passwordRegistration}>
                                    {errorMessage.passwordRegistration}
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Enter password" style={errorBorder.passwordConfirmRegistration}>
                                    <input className="input100" type="password" name="passwordConfirmRegistration" onChange={this.handleFormInput} placeholder="Password Confirmations"/>
                                </div>
                                <div className="error-validate" style={errorVisibility.passwordConfirmRegistration}>
                                    {errorMessage.passwordConfirmRegistration}
                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;