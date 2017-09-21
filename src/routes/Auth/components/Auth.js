import React from 'react'
import {addUser, loginUser, getInfo, logOut} from "../modules/auth";

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
        //console.log('this.state-- ', this.state);
        this.props.loginUser(this.state);
        console.log('this.props.data-- ', this.props.data)
        Auth.authenticateUser(this.props.data);
    }
    logout() {
        Auth.deauthenticateUser();
    }


    render () {
        let store = localStorage.getItem('token');
        console.log('store-- ', store);
        let obj = {username: this.handleChange.bind(this, 'username'),
                    email: this.handleChange.bind(this, 'email'),
                    password: this.handleChange.bind(this, 'password'),
                    reg: this.registerUser.bind(this),
                    log: this.logUser.bind(this),
                    // logout: this.logout.bind(this)
                    }
        let userInfo;
        console.log('Auth.-- ', Auth.isUserAuthenticated());
        if(Auth.isUserAuthenticated() === true && this.props.data !== undefined)
        {
            userInfo = <Userinfo props={this.props} cahnge={obj}/>
        }
        else if(Auth.isUserAuthenticated() === false)
        {
            userInfo = 'Login or signup';
        }
        else
        {
            userInfo = 'Login or signup';
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
                <input type="submit" value="Logout" onClick={this.logout.bind(this, 'logout')}/>
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
            {/*<span>Email: {props.props.data.email}</span> <br />*/}
            {/*<span>UserID:{props.props.data.id}</span> <br />*/}
            {/*<button type="button" onClick={Auth.press.bind(this)}>Logout</button>*/}
            {/*<span>Email: {localStorage.getItem(token)}</span> <br />*/}
            {/*<span>UserID:{props.props.data.id}</span> <br />*!/*/}

        </div>
    )
}


export default Auth
