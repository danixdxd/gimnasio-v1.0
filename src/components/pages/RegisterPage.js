import React from 'react'; 
import RegisterForm from "../forms/RegisterForm";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
    submit = data => {
        console.log(data);
    };
    render(){
        return(            
            <div>
                <div className="ui container">
                    <h1>Login Page</h1>
                    <RegisterForm submit={this.submit}/>
                    <br />
                    <Link className="ui button" to="/">Cancel</Link>
                </div>
            </div>
        );
    }
}

export default LoginPage;