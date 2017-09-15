import React from 'react'
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
    componentDidMount () {
        console.log('this.props.something-- ',this.props )
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

    handleChange(type,event) {
        event.preventDefault()
        this.setState({[type]: event.target.value})
    }

    press () {
        this.makeNews();
    }

    makeNews(event) {
        event.preventDefault();
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

        return (
            <div className="add-news">
                <form className="add-news__form" onSubmit={this.makeNews} name="fileinfo">

                    <input value={this.state.author} name="author" placeholder="Write your name" onChange={this.handleChange.bind(this, 'author')}/>

                    <input value={this.state.topic} name="topic" placeholder="Write tittle" onChange={this.handleChange.bind(this, 'topic')}/>

                    <textarea value={this.state.newstext} name="newstext" className="form__add-text" placeholder="Add news text here"
                              maxLength='4000' onChange={this.handleChange.bind(this, 'newstext')}/>

                    <input value={this.state.tags} name="tags" placeholder="Write tags" onChange={this.handleChange.bind(this, 'tags')}/>

                    <input type="file" name="file" ref={(input) => { this.fileInput = input }} />

                    <input type="submit" value="Add news"/>
                </form>
            </div>
        )
    }
}

export default Addnews
