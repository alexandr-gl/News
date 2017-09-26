import React from 'react'
import jwt from 'jsonwebtoken'
import {addUser, loginUser, getInfo, logOut, loginFB} from "../modules/auth";
import { IndexLink, Link, browserHistory } from 'react-router'
import validator from 'validator';

export class Auth extends React.Component {
    constructor (props) {
        super(props)
         this.state = {
            page: '',
             name: '',
             email: '',
             password: '',
             }
    }

    static authenticateUser(token) {
        localStorage.setItem('token', token);
    }
    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
    static deauthenticateUser() {
        localStorage.removeItem('token');
        console.log('del token-- ', localStorage.getItem('token'));
    }

    componentDidMount () {
    }

    componentWillMount () {
        if (this.props.location.query.jwtToken && !Auth.isUserAuthenticated()) {
            let decode = jwt.decode(this.props.location.query.jwtToken)
            localStorage.setItem('token', JSON.stringify(decode));
            console.log('token in facebook-- ', localStorage.getItem('token'));
        }
    }
    handleChangeEmail (event) {
        //this.setState({ email: event.target.value })
    }
    handleChangePassword (event) {
        //this.setState({ password: event.target.value })
    }

    handleChange(type,event) {
        this.setState({[type]: event.target.value})
    }

    select(e) {
        this.setState({page: e});
        // let rout = '/auth/' + e;
        // browserHistory.push(rout);
    }

    registerUser (event) {
        event.preventDefault();
        if(validator.isEmail(this.state.email) !== true){
            alert('Email is invalid');
        }
        else{
        this.props.addUser(this.state);}
        this.render();
    }

    logUser (event) {
        event.preventDefault();
        this.props.loginUser(this.state);
    }
    logout(event) {
        event.preventDefault();
        Auth.deauthenticateUser();
        this.setState({
            // username: '',
            email: '',
            password: '',
        });
        browserHistory.push('/auth');
        this.render();
    }
    facebook() {
        //event.preventDefault();
        // if (this.props.location.query.jwtToken) {
        //     let decode = jwt.decode(this.props.location.query.jwtToken)
        //     localStorage.setItem('token', JSON.stringify(decode));
        //     console.log('token in facebook-- ', localStorage.getItem('token'));
        // }
    }

    render () {
        console.log('this.props-- ', this.props);
        let userInfo;
        let isLoggedIn;
        let registerform;
        console.log('this.props.location.query-- ', this.props.location.query.author);
            let store = JSON.parse(localStorage.getItem('token'));
            console.log('store-- ', store);
            let obj = {
                name: this.handleChange.bind(this, 'name'),
                email: this.handleChange.bind(this, 'email'),
                password: this.handleChange.bind(this, 'password'),
                reg: this.registerUser.bind(this),
                log: this.logUser.bind(this),
                logout: this.logout.bind(this),
                selectin: this.select.bind(this, 'login'),
                selectup: this.select.bind(this, 'signup')
            };
            if (Auth.isUserAuthenticated() === true) {
                userInfo = <Userinfo props={store} change={obj}/>;
                isLoggedIn = 'You are logged in';
                console.log('11111111-- ', Auth.isUserAuthenticated())
            }
            else if (Auth.isUserAuthenticated() === false) {
                userInfo = 'Login or signup';
                isLoggedIn = <Selectbtn props={obj}/>;
                console.log('222222222-- ', Auth.isUserAuthenticated());
                console.log('userInfo-- ', userInfo);
            }
            else {
                //userInfo = 'Login or signup';
                userInfo = <Signuporlog/>;
                isLoggedIn = <Selectbtn props={obj}/>;
                console.log('333333333-- ', Auth.isUserAuthenticated())
            }
            if (this.state.page === 'login') {
                registerform = <Registerform props={this.state} change={obj}/>;
            }
            else if (this.state.page === 'signup') {
                registerform = <Loginform props={this.state} change={obj}/>;
            }
            //return <EmailSignUpForm />;
            console.log('this.state-- ', this.state);
        //browserHistory.push('/auth');
            return (<div className="container">

                <div className="jumbotron text-center">
                    <h1><span className="fa fa-lock"> Authentication</span></h1>
                    {isLoggedIn}
                    {userInfo}
                </div>
                {registerform}
            </div>)
        }
}

function Registerform(props) {
    return (
            <form className="add-news__form" onSubmit={props.change.reg} name="reguser">
                {/*<input value={props.props.username} onChange={props.change.username} name="author" placeholder="Write your name"/>*/}

                <input type="text" value={props.props.email} onChange={props.change.email} name="author" placeholder="Write your email" />

                <input type="text" value={props.props.name} onChange={props.change.name} name="author" placeholder="Write your name" />

                <input type="password" value={props.props.password} onChange={props.change.password} name="author" placeholder="Write your password" />

                <input type="submit" value="Finish registration"/>

            </form>
        )
}

function Loginform(props) {
    return(
        <form className="add-news__form" onSubmit={props.change.log} name="loginuser">
            <input type="text" onChange={props.change.email} name="author" placeholder="Write your email" />

            <input type="password" onChange={props.change.password} name="author" placeholder="Write your password" />

            <input type="submit" value="Login"/>
        </form>
    )
}

function Userinfo(props) {
    console.log('props-- ', props)
    let email;
    if(props.props.email === undefined)
    {
        email = "User haven't got email";
    }
    else{ email = props.props.email}
    return(
        <div>
            <span>Name: {props.props.name}</span> <br />
            <span>Email: {email}</span> <br />
            <span>UserID:{props.props.id}</span> <br />
            <input type="button" value="Logout" onClick={props.change.logout} />
        </div>
    )
}

function Signuporlog(){
    return(
        <div> Login or signup</div>
    )
}

function Selectbtn (props) {
    return(<div>
                <p>Login or Register with:</p>
                <input type="submit" value="Sign up" onClick={props.props.selectin} />
                <input type="submit" value="Login" onClick={props.props.selectup}/>
                <a href='/users/login/facebook' className="btn btn-primary button__social center-block">Facebook</a>
           </div>
);

}

function Seluserinfo(props){
    console.log('Seluserinfo-- ', props);
    return(<div>
        {/*<span>Name: {props.props.name}</span> <br />*/}
        <span>Email: {}</span> <br />
    </div>)
}

export default Auth
