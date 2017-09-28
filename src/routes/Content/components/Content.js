import React from 'react'
import ReactDOM from 'react-dom'
import {getNews} from "../modules/content";
import { IndexLink, Link } from 'react-router'
import './Content.scss'
import topPosition from 'react-scroll-up'


export class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {search: '', tag: '', numPage: 0, path:'' , q:'1', act: 'orig'}
    //this.press = this.press.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.pagination = this.pagination.bind(this);
        //this.qqz = this.qqz.bind(this);
        // Content.handleClick = Content.handleClick.bind(this);
        this.filterT = this.filterT.bind(this);
        this.myArray=[];
    }
    filterT(e){
        this.setState({tag: e});
    }

    componentDidMount () {
        this.props.getNews();

    }
    handleClickDropFilter()
    {
        this.setState({tag: ''});
    }

    authorInf(e){
        localStorage.setItem('selAuthor', e);
        this.props.getInfo(e);
    }

    handleChange(type, event) {
        event.preventDefault()
        this.setState({[type]: event.target.value})
    }

    handleClickPages(pageNum) {
        this.setState({numPage: pageNum});
        window.scrollTo(0, 0);
    }


    pagination (numPages) {
        this.myArray=[];

        for(let i = 0; i<numPages; i++)
        {
            if (this.state.numPage == i) { this.myArray.push(<a key={i}> <button
                className="pagination__btn pagination__btn_active" onClick={this.handleClickPages.bind(this, i)}>{i + 1}</button></a>) }
            else {
                this.myArray.push(<a key={i}> <button
                    className="pagination__btn" onClick={this.handleClickPages.bind(this, i)}>{i + 1}</button></a>)
            }
        }
    }

    render() {
        let flt = this.filterT;
        let libraries = this.props.data;
        let searchString = this.state.search.trim().toLowerCase();
        let searchTags = this.state.tag.trim().toLowerCase();
        let firstNews = this.state.numPage + 2 * this.state.numPage;
        let lastNews = firstNews + 3;
        // приведение тегов из бд к виду подходящему для обработки
        var lbtags = libraries.map(function(news) {
            news.tags = news.tags.toLowerCase();
            return news.tags.split(' ');
        });
        console.log('lbtags-- ', lbtags)
        //уникальность тегов
            var obj = {};
            for (let j = 0; j < libraries.length; j++) {
                for (var i = 0; i < lbtags.length; i++) {
                    if(lbtags[j][i] !== undefined && lbtags[j][i] !== '') {
                        var str = lbtags[j][i];
                        console.log('str-- ', str);
                        obj[str] = true; // запомнить строку в виде свойства объекта
                    }
                }
            }
        lbtags = Object.keys(obj);

        // поиск по любым вхождениям
        if(searchString.length > 0){
            libraries = libraries.filter(function (news) {
                let str = news.topic + news.newstext + news.author + news.tags;
                return str.match(searchString);
            });
        }

        // фильтр по тегам
        if(searchTags.length > 0){
            libraries = libraries.filter(function (news) {
                let str = news.tags;
                return str.match(searchTags);
            });
        }

        //пагинация
        let pages;
        if (libraries.length%3 == 0)
        {
            pages = libraries.length/3;
        }
        else
        {
            pages = Math.trunc(libraries.length/3) + 1;
        }
        libraries = libraries.slice(firstNews, lastNews);
        return (
            <div className="news">
                <div className="newscontent">
                <input className="news__search" value={this.state.search} placeholder="Search" onChange={this.handleChange.bind(this, 'search')}/>
                {libraries.map(function(news, index){
                    return <li  className="news__li" key={index}>
                        <span><h1>{news.topic}</h1></span><br />
                        <span>{news.newstext}</span><br />
                        <span>Author: <Link to={`/auth?author=${news.author}`} >{news.author}</Link></span>
                        <span>Tags: {news.tags}</span>
                        <img src={news.file} />
                    </li>
                })}
                    <div className="pagination">{this.pagination(pages)}</div>
                    {this.myArray.map((itm)=>{return itm})}
                </div>
                <div className="newstags">
                    {lbtags.map(function(lbtags, index) {
                            return <input key={index} type="submit" value={lbtags} className="news__li-tags" onClick={()=>flt(lbtags)}></input>
                    })}
                    <input value='Drop filter' type="submit" className="news__li-tags-drop" onClick={this.handleClickDropFilter.bind(this, 'drop')}></input>
                </div>
            </div>
        )
    }
}

export default Content
