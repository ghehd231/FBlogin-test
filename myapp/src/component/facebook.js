import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class facebook extends Component {

    responseFacebook(response) {
        console.log(response);
    }
   
    render() {
        return (
            <FacebookLogin
            appId="473667476518556"
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends,user_actions.books"
            callback={this.responseFacebook}
            />
        )
    }
}

export default facebook;