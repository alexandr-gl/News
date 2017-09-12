import React from 'react'
import ReactDOM from 'react-dom'
import {getNews} from "../modules/content";


export class Content extends React.Component {
    constructor (props) {
        super(props)
        this.state = {search: '', tag: '', numPage: 0}
    //this.press = this.press.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.pagination = this.pagination.bind(this);
        Content.handleClick = Content.handleClick.bind(this);
        this.myArray=[];

    }

    componentDidMount () {
        this.props.getNews();
    }
    handleClickDropFilter()
    {
        this.setState({tag: ''});
    }

    handleChange(type, event) {
        event.preventDefault()
        this.setState({[type]: event.target.value})
    }

    static handleClick(e) {
        this.setState({tag: e});
    }
    // qqz(){
    //     return <div>TTTTT</div>
    // }

    handleClickPages(pageNum) {
        console.log('pageNum-- ', pageNum)
        this.setState({numPage: pageNum});
    }


    pagination (numPages) {
        this.myArray=[];

        for(let i = 0; i<numPages; i++)
        {
            this.myArray.push( <button key={i} className="pagination__pages" onClick={this.handleClickPages.bind(this, i)} >{i+1}</button>)
        }
        console.log('this.myArray-- ', this.myArray)
    }

    render() {
        let libraries = this.props.data;
        let searchString = this.state.search.trim().toLowerCase();
        let searchTags = this.state.tag.trim().toLowerCase();
        let firstNews = this.state.numPage + 2 * this.state.numPage;
        let lastNews = firstNews + 3;
        // приведение тегов из бд к виду подходящему для обработки
        var lbtags = libraries.map(function(news) {
            return news.tags.split(' ');
        });

        //уникальность тегов
            var obj = {};
            for (let j = 0; j < libraries.length; j++) {
                for (var i = 0; i < lbtags.length; i++) {
                    var str = lbtags[j][i];
                    obj[str] = true; // запомнить строку в виде свойства объекта
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
        if (pages%3 == 0)
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
                    {lbtags.map(function(lbtags, index) {
                            return <input key={index} type="submit" value={lbtags} className="news__li-tags" onClick={Content.handleClick.bind(this, lbtags)}></input>
                    })}
                    <input value='Drop filter' type="submit" className="news__li-tags-drop" onClick={this.handleClickDropFilter.bind(this, 'drop')}></input>
                </div>
                <div className="pagination">{this.pagination(pages)}</div>
                {this.myArray.map((itm)=>{return itm})}

                {/*<div>{this.qqz()}</div>*/}

            </div>
        )
    }
}
export default Content
