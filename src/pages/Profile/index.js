import React from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { connect} from 'react-redux'
import {addInAuth} from '../redux/Action';
import AppHeader from "../AppHeader";


class Profile extends React.Component{
   constructor(props){
	    super(props);
        this.state={
            auth:{},
            userName:'',
        }
        this.getCurrentUser= this.getCurrentUser.bind(this);
        this.handleAdduserName=this.handleAdduserName.bind(this)
    }   

    getCurrentUser(){
        let auth = window.localStorage.getItem('auth')
        console.log('atuh',JSON.parse(auth))
        auth= JSON.parse(auth)
        this.setState({auth:auth})
    }

    componentWillMount(){
        this.getCurrentUser();
    }

    handleAdduserName(){
        let {auth,userName} = this.state
        let params ={
            userName
        }
        this.props.addInAuth(params)
    }

	render() {
        let {auth,userName} = this.props.auth || {}
		return(
            <div className="profile-main">
                <AppHeader />
                <input 
                    value={userName}
                    onChange={(e)=>this.setState({userName:e.target.value})}
                />
                <button onClick={this.handleAdduserName}>
                    submit
                </button>
            </div>
		)
	}
}

const mapStateToProps = ({auth}) =>{
    return {auth}
}
const mapDispatchToProps = {
    addInAuth,
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)