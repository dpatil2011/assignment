import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error} </div>
                </div>

            );
        }

    }
    renderInput = ({input, label, meta, type}) => {
      return(
          <div className="field">
              <label>{label}</label>
              <input {...input} type={type}/>
              {this.renderError(meta)}
          </div>
      )
    }
    render(){
        const { onSubmit, required } = this.props;  
        
        return(
           <form className="ui form error" onSubmit={this.props.handleSubmit(onSubmit)}>
               <Field name='username' type="text"component={this.renderInput} label='userName' validate={[required]}/>
               <Field name="password"  type="password" component={this.renderInput} label='Password' validate={[required]}/>
               <button className='ui button primary' style={{marginTop: '20px'}}>Submit</button>
           </form>
        )
    }
}

export default reduxForm({
    form: 'login-form',
  })(LoginForm)