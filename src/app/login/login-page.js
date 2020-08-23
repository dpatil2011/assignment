import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./../../modules/login/component/login-form";

class LoginPage extends Component {
    onSubmit =(formValues) => {
        console.log(formValues);
    }     
   required = value => value ? undefined : 'Required'

    render(){

        return(
           <LoginForm 
           required={this.required}
           onSubmit={this.onSubmit}
           />
        )
    }
}

const mapStateToProps = (state) => {
    const { login } = state;
    return {
      login,
    };
  };
const mapDispatchToProps = ((dispatch) => ({
  }))();

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);