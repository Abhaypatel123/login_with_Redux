import React from "react";
import MaterialTable from "material-table";
import axios from "axios";
import {connect} from 'react-redux';
import './appheader.css';
import {logoutAuth} from '../redux/Action';


class Appheader extends React.Component{
   constructor(props){
	    super(props);
        console.log(props)
        this.state={
            auth:{},
        }
        this.handleLogout=this.handleLogout.bind(this)
    }   

    

    componentWillMount(){
        
    }

    handleLogout(){
        console.log(this.props)
        this.props.logoutAuth()
        // this.props.history.push('/profile');
    }

	render() {
        let {auth} = this.props

        
		return(
            <div className="header-main">
                <div class="header">
                    <a href="#default" class="logo">CompanyLogo</a>
                    <div class="header-right">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </div>
		)
	}
}

const mapStateToProps = ({auth} ) => {
    return {auth}
}

const mapDispatchToProps = {
    logoutAuth,
}

export default connect(mapStateToProps,mapDispatchToProps)(Appheader);