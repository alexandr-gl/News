import React from 'react'
import {addUser, loginUser, getInfo, logOut, loginFB} from "../modules/auth";

export class Auth extends React.Component {
    constructor (props) {
        super(props)
         this.state = {
            page: '',
             // username: '',
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
    }
    static getToken() {
        return localStorage.getItem('token');
    }

    componentDidMount () {
        console.log('this.props.data-- ', this.props.data)
        // // Auth.authenticateUser();
        // Auth.isUserAuthenticated();
    }

    // componentWillMount () {
    //     this.splitTags();
    // }
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
    }

    registerUser (event) {
        event.preventDefault();
        console.log('this.state-- ', this.state)
        this.props.addUser(this.state);
    }

    logUser (event) {
        event.preventDefault();
        this.props.loginUser(this.state);
        // console.log('logUserProps-- ', this.props.data);
        // Auth.authenticateUser(this.props.data);
    }
    logout(event) {
        event.preventDefault();
        Auth.deauthenticateUser();
        this.setState({
            // username: '',
            email: '',
            password: '',
        });
        this.render();
    }
    facebook() {
        //event.preventDefault();
        this.props.loginFB();
    }

    render () {
        let store = JSON.parse(localStorage.getItem('token'));
        let obj = {username: this.handleChange.bind(this, 'username'),
                    email: this.handleChange.bind(this, 'email'),
                    password: this.handleChange.bind(this, 'password'),
                    reg: this.registerUser.bind(this),
                    log: this.logUser.bind(this),
                    logout: this.logout.bind(this)
                    };
        console.log('obj-- ', obj)
        let userInfo;
        console.log('Auth.-- ', Auth.isUserAuthenticated());
        if(Auth.isUserAuthenticated() === true)
        {
            userInfo = <Userinfo props={store} change={obj}/>
            console.log('11111111-- ', Auth.isUserAuthenticated())
        }
        else if(Auth.isUserAuthenticated() === false)
        {
            userInfo = 'Login or signup';
            //userInfo = <Signuporlog />
            console.log('222222222-- ', Auth.isUserAuthenticated())
            console.log('userInfo-- ', userInfo);
        }
        else
        {
            //userInfo = 'Login or signup';
            userInfo = <Signuporlog />
            console.log('333333333-- ', Auth.isUserAuthenticated())
        }

        let registerform;
        if(this.state.page == 'login')
        { registerform = <Registerform props={this.state} change={obj}/>;}
        else if (this.state.page == 'signup') {registerform = <Loginform props={this.state} change={obj}/>;}
        //return <EmailSignUpForm />;
        return(<div className="container">

            <div className="jumbotron text-center">
                <h1><span className="fa fa-lock"></span> Node Authentication</h1>

                <p>Login or Register with:</p>
                <input type="submit" value="Sign up" onClick={this.select.bind(this, 'login')} />
                <input type="submit" value="Login" onClick={this.select.bind(this, 'signup')}/>
                <a href='/users/login/facebook' className="btn btn-primary button__social center-block">Facebook</a>
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

                <input value={props.props.email} onChange={props.change.email} name="author" placeholder="Write your email" />

                <input value={props.props.password} onChange={props.change.password} name="author" placeholder="Write your password" />

                <input type="submit" value="Finish registration"/>

            </form>
        )
}

function Loginform(props) {
    return(
        <form className="add-news__form" onSubmit={props.change.log} name="loginuser">
            <input onChange={props.change.email} name="author" placeholder="Write your email"/>

            <input onChange={props.change.password} name="author" placeholder="Write your password" />

            <input type="submit" value="Login"/>
        </form>
    )
}

function Userinfo(props) {
    return(
        <div>
            <span>Email: {props.props.email}</span> <br />
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


export default Auth
