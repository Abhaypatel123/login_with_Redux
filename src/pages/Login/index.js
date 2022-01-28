import React from "react";
import {Button,Input } from '@material-ui/core';
import  './login.css';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createAuth} from '../redux/Action';
import requireAuth from "../../Hoc/requireAuth";

class Login extends React.Component{
   constructor(props){
	    super(props);
        this.state={
            email:'',
            password:"",
            errorMessage:"",
            acceptTermCondition:false,
            toHome:false
    
        }
        this.handleLogin=this.handleLogin.bind(this);
    }   

    handleLogin(){
        let {email,password,acceptTermCondition} = this.state
        if(!email){
            this.setState({errorMessage:'Please enter email'})
        }else if (!password){
            this.setState({errorMessage:'Please enter password'})
        }
        // else if(!acceptTermCondition){
        //     this.setState({errorMessage:'Please check term and condition'})
        // }
        else{
            let auth ={
                email:email,
                password:password,
            }

            // window.localStorage.setItem('auth',JSON.stringify(auth));
            this.props.createAuth(auth)
            this.props.history.push('/home')
            this.setState({toHome:true})
            

        }
    }


	render() {
        let {email,password,errorMessage,acceptTermCondition} = this.state


        // console.log('login',this.props.auth)

		return(
            <div>
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                    
                        <h2 class="active"> Log In </h2>
                        
                    
                        <div class="fadeIn first">
                        <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" id="icon" alt="User Icon" />
                        </div>

                    
                        <div>
                            <input 
                                type="text"  
                                class="fadeIn second" 
                                name="login"   
                                placeholder="Enter email" 
                                onChange={(e)=>this.setState({email:e.target.value,errorMessage:''})}
                            />
                            <input 
                                type="password" 
                                id="password" 
                                class="fadeIn third" 
                                name="login"   
                                placeholder="Enter password" 
                                onChange={(e)=>this.setState({password:e.target.value,errorMessage:''})}
                            />

                            {errorMessage &&
                                <div className="error-msg">
                                    {errorMessage}
                                </div>
                            }

                            <label>
                                <input 
                                    type="checkbox" 
                                    checked={acceptTermCondition}  
                                    className="checkbox-input" 
                                    onChange={()=> {this.setState({acceptTermCondition:!acceptTermCondition}); alert('are you sure you want to accept')}}
                                />
                                accept term and conditions
                            </label>

                            <button  className="login-btn"  onClick={this.handleLogin}>
                                Log in
                            </button>
                            
                        </div>

                    

                    </div>
                </div>

            </div>
		)
	}
}

const mapStateToProps = ({auth}) => {
    return {auth}
}

const mapDispatchToProps = {
    createAuth,
}

export default connect (mapStateToProps,mapDispatchToProps)((Login));