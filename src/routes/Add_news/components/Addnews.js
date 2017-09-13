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
        // this.state.file = this.refs.fileInput
        // let formData = new FormData("fileinfo");
        // formData.append("author", this.state.author)
        // formData.append("topic", this.state.topic)
        // formData.append("newstext", this.state.newstext)
        // formData.append("tags", this.state.tags)
        // formData.append("file", this.fileInput.files[0])
        // console.log('formData-- ', formData)
        // for (let [key, value] of formData.entries()) {
        //     // console.log('-------', key, value);
        // }
        //this.state = formData;
        // console.log('this.state-- ', this.state)
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

        //отправка файла
        // formData.addEventListener('submit', function(ev) {
        //     var oOutput = document.querySelector("div"),
        //         oData = new FormData("fileinfo");
        //
        //     oData.append("CustomField", "This is some extra data");
        //
        //     var oReq = new XMLHttpRequest();
        //     oReq.open("POST", "stash.php", true);
        //     oReq.onload = function(oEvent) {
        //         if (oReq.status == 200) {
        //             oOutput.innerHTML = "Uploaded!";
        //         } else {
        //             oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
        //         }
        //     };
        //
        //     oReq.send(oData);
        //     ev.preventDefault();
        // }, false);
        // this.state.file = formData;
    }
}

export default Addnews
