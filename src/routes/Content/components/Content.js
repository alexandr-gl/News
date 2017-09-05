import React from 'react'
import ReactDOM from 'react-dom'
import {getNews} from "../modules/content";

// export class Content extends React.Component {
//     constructor (props) {
//         super(props)
//         //this.myFunction = this.myFunction.bind(this);
//          this.state = {
//              }
//
//         this.press = this.press.bind(this)
//     }
//     componentDidMount () {
//         //this.props.getUser()
//     }
//     handleChangeEmail (event) {
//         //this.setState({ email: event.target.value })
//     }
//     handleChangePassword (event) {
//         //this.setState({ password: event.target.value })
//     }
//     handleSubmitForm (event) {
//         event.preventDefault()
//         // let formData = Object.assign({}, this.state)
//     }
//
//     press () {
//         this.props.getNews();
//         console.log('this.props.state-- ', this.props.state);
//         let array = this.props.data;
//         console.log('1488', array);
//
//         console.log('shiiiiiiiiit', arraykek);
//     }
//     render () {
//         return (
//             <div className="article">
//                 <button onClick={this.press}>Show news</button>
//                 <h1>Tittle:</h1>
//                 <h2>Author:</h2>
//                 <div></div>
//             </div>
//         )
//     }
// }

export class Content extends React.Component {
    constructor (props) {
        super(props)
    this.press = this.press.bind(this)
    }

    press () {
        this.props.getNews();
}

    render() {
        return (
            <div>
                <button onClick={this.press}>Press</button>
                <List something={this.props.data}/>
            </div>
        )
    }
}


export const List  = props => {
    const list = props.something.map((obj, item) =>{
        return <div key={item} className="news">
            <div className="news__tittle"><h1>Tittle: {obj.topic}</h1></div>
            <div className="news__author"><h4>Author: {obj.author}</h4></div>
            <div className="news__text">Text: {obj.text}</div>

            {/*<h2 className="news__author-name">Author: {props.userInfo.nickname}</h2>*/}
            {/*<img className="news__author-img" href="#"/>*/}
            {/*<h3 className="news__theme">{news.theme}</h3>*/}
            {/*<div className="news__news-text">{news.text_news}</div>*/}
            {/*<img className="news__news-img"/>*/}
            {/*<div className="news__news-tag">{news.tag}</div>*/}
            {/*<div className="news__news-creation-date">{}</div>*/}
        </div>
    });
        return (
            <div>
                <ul>{list}</ul>
            </div>
        )
};

export default Content
