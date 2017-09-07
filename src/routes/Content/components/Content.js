import React from 'react'
import ReactDOM from 'react-dom'
import {getNews} from "../modules/content";


export class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {search: ''}
    this.press = this.press.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(type,event) {
        event.preventDefault()
        this.setState({[type]: event.target.value})

    }


    press () {
        this.props.getNews('all');
}


    render() {
        return (
            <div>
                <button onClick={this.press}>Press</button> <br />
                <input value={this.state.search} placeholder="Search" onChange={this.handleChange.bind(this, 'search')}/>
                <button onClick={this.pressSearch}> Search </button>
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
            <div className="news__text">Text: {obj.newstext}</div>
            <div className="news__img"></div>
            <div className="news__tags"></div>
        </div>
    });
        return (
            <div>
                <ul>{list}</ul>
            </div>
        )
};

export default Content
