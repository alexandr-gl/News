import React from 'react'
import {addUser} from "../modules/auth";

export class Auth extends React.Component {
    constructor (props) {
        super(props)
         this.state = {
            page: '',
             username: '',
             email: '',
             password: '',
             }

    }
    componentDidMount () {
        console.log('this.state-- ', this.state)
        console.log('this.props-- ', this.props)
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

    press(){
        console.log('1-- ', 1)
    }

    render () {
        console.log('this.state222-- ', this.state)
        let shit;
        let obj = {username: this.handleChange.bind(this, 'username'),
                    email: this.handleChange.bind(this, 'email'),
                    password: this.handleChange.bind(this, 'password'),
                    kek: this.registerUser.bind(this),
                    lol: this.press.bind(this)}
        if(this.state.page == 'login')
        { shit = <Registerform props={this.state} change={obj}/>;}
        else if (this.state.page == 'signup') {shit = <Signupform props={this.state}/>;}
        //return <EmailSignUpForm />;
        return(<div className="container">

            <div className="jumbotron text-center">
                <h1><span className="fa fa-lock"></span> Node Authentication</h1>

                <p>Login or Register with:</p>
                <input type="submit" value="Log in" onClick={this.select.bind(this, 'login')}/>
                <input type="submit" value="Sign up" onClick={this.select.bind(this, 'signup')}/>
                {shit}
            </div>

        </div>)

    }
}

function Registerform(props) {
    return (
            <form className="add-news__form" onSubmit={props.change.kek} name="reguser">
                <input value={props.props.username} onChange={props.change.username} name="author" placeholder="Write your name"/>

                <input value={props.props.email} onChange={props.change.email} name="author" placeholder="Write your email" />

                <input value={props.props.password} onChange={props.change.password} name="author" placeholder="Write your password" />

                <input type="submit" value="Finish registration"/>

            </form>
        )
}

function Signupform(props) {
    return(
        <form className="add-news__form" name="reguser">
            <input value={props.props.username} onChange={props.change.username} name="author" placeholder="Write your name"/>

            <input value={props.props.email} onChange={props.change.email} name="author" placeholder="Write your email" />
        </form>
    )
}


export default Auth
