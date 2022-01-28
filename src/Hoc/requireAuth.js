import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';



export default (ChildComponent) => {
	class RequireAuth extends Component {
		constructor(props) {
            console.log('props',props)
			super(props);
			this.state = {
				auth:props.auth,
			}
		}
		componentWillMount() {
			
		}

        componentWillReceiveProps(nextProps){
            console.log('neee',nextProps)
            this.setState({
                auth:nextProps.auth
            })
        }

		render() {
            let {auth} = this.state
			console.log('auth....',auth,)


            if(!auth){
                return <Redirect to='/login' />
            }

			return <ChildComponent {...this.props} />
		}
	}

	function mapStateToProps({ auth }) {
		return { auth };
	}

	return connect(mapStateToProps, {  })(RequireAuth);
};
