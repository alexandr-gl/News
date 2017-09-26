import React from 'react'
import jwt from 'jsonwebtoken'
import {addNews} from "../modules/addnews";

export class Addnews extends React.Component {
    constructor (props) {
        super(props)
         this.state = {
            author: '',
             topic: '',
             newstext: '',
             tags: '',
             file: [],
             }

        this.makeNews = this.makeNews.bind(this);
        this.press = this.press.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
    // static authenticateUser(token) {
    //     localStorage.setItem('token', token);
    // }
    componentDidMount () {
        console.log('this.props.something-- ', this.props)
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
    handleSubmitForm (event) {
        event.preventDefault()
        // let formData = Object.assign({}, this.state)
    }

    handleChange(type, event) {
        event.preventDefault()
        this.setState({[type]: event.target.value})
    }

    press () {
        this.makeNews();
    }

    makeNews(event) {
        event.preventDefault();
        console.log('this.fileInput-- ', this.fileInput)
        this.state.file = this.fileInput.files[0];
        this.props.addNews(this.state);
        //this.props.addNews(this.fileInput.files[0]);
        this.setState({
            newstext: '',
            tags: '',
            topic: '',
            author: '',
            file: []
        })

    }

    render () {
        let username = JSON.parse(localStorage.getItem('token'));
        console.log('username-- ', localStorage.getItem('token'));
        console.log('local kekekekek-- ', localStorage.getItem('token'));
        let obj = {
            author: this.handleChange.bind(this, 'author'),
            topic: this.handleChange.bind(this, 'topic'),
            newstext: this.handleChange.bind(this, 'newstext'),
            tags: this.handleChange.bind(this, 'tags'),
            send: this.makeNews.bind(this)
            //addFile: this.fileInput
        };
        let addform;
        if(Addnews.isUserAuthenticated() === true)
        {
            this.state.author = username.name;
            addform = <Add props={this.state} funcs={obj} image={(input) => { this.fileInput = input }} />;
            console.log('11111111-- ', Addnews.isUserAuthenticated())
        }
        else if(Addnews.isUserAuthenticated() === false)
        {
            addform = 'Login or signup';
            //userInfo = <Signuporlog />
            console.log('222222222-- ', Addnews.isUserAuthenticated())
            console.log('addform-- ', addform);
        }
        else
        {
            //userInfo = 'Login or signup';
            addform = 'Login or signup';
            console.log('333333333-- ', Addnews.isUserAuthenticated())
        }
        console.log('this-- ', this);
        return(<div>{addform}</div>);
    }
}

function Add(props) {
    console.log('Addnews.state-- ', props.props.author);
    console.log('props.funcs-- ', props.funcs);
    return (
        <div className="add-news">
            <form className="add-news__form" onSubmit={props.funcs.send} name="fileinfo">

                <input value={props.props.author} name="author" placeholder="Write your name" onChange={props.funcs.author} disabled/>

                <input value={props.props.topic} name="topic" placeholder="Write tittle" onChange={props.funcs.topic}/>

                <textarea value={props.props.newstext} name="newstext" className="form__add-text" placeholder="Add news text here"
                          maxLength='4000' onChange={props.funcs.newstext}/>

                <input value={props.props.tags} name="tags" placeholder="Write tags" onChange={props.funcs.tags} />

                <input type="file" name="file" ref={props.image} />

                <input type="submit" value="Add news"/>
            </form>
        </div>
    );
}

export default Addnews
