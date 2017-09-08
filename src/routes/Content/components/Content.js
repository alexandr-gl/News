import React from 'react'
import ReactDOM from 'react-dom'
import {getNews} from "../modules/content";


export class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {search: ''}
    //this.press = this.press.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        this.props.getNews();
    }


    handleChange(type, event) {
        event.preventDefault()
        this.setState({[type]: event.target.value})
    }

    render() {
        var libraries = this.props.data;
        let searchString = this.state.search.trim().toLowerCase();
        if(searchString.length > 0){
            libraries = libraries.filter(function (news) {
                let str = news.topic + news.newstext + news.author;
                return str.match(searchString);
            });
        }
        // libraries.map(function(news, index){
        //     console.log('news.tags-- ', news.tags);
        // })
        return (
            <div className="news">
                <div>
                <input className="news__search" value={this.state.search} placeholder="Search" onChange={this.handleChange.bind(this, 'search')}/>
                {libraries.map(function(news, index){
                    return <li  className="news__li" key={index}>
                        <span><h1>{news.topic}</h1></span><br />
                        <span>{news.newstext}</span><br />
                        <span>Author: {news.author}</span>
                        <span>Tags: {news.tags}</span>
                    </li>
                })}
                </div>
                <div className="newstags">
                    {libraries.map(function(news, index) {
                        return <li  className="news__li-tags" key={index}>{news.tags}</li>
                    })}
            </div>
            </div>
        )
    }
}
export default Content
