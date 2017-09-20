import React from 'react'
import {addUser, loginUser, getInfo} from "../modules/auth";

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
    componentDidMount () {
        console.log('this.props.data-- ', this.props.data)
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
        console.log('this.state-- ', this.state);
        this.props.loginUser(this.state);
    }

    // logout(event){
    //     event.preventDefault();
    //     this.props.logOut();
    // }

    press(){
        console.log('1-- ', 1)
    }

    render () {
        console.log('this.props-- ', this.props);
        let obj = {username: this.handleChange.bind(this, 'username'),
                    email: this.handleChange.bind(this, 'email'),
                    password: this.handleChange.bind(this, 'password'),
                    reg: this.registerUser.bind(this),
                    log: this.logUser.bind(this),
                    // logout: this.logout.bind(this)
                    }

        let userInfo;
        if(this.props.data === 'error login')
        {
            userInfo = 'Erorr!!!'
        }
        else if(this.props.data === undefined)
        {
            userInfo = 'Login or signup'
        }
        else {userInfo = <Userinfo props={this.props} />}

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
            <span>Email: {props.props.data.email}</span> <br />
            <span>UserID:{props.props.data.id}</span> <br />
            {/*<input value="Logout" type="button" onClick={props.change.logout}/>*/}
        </div>
    )
}


export default Auth
