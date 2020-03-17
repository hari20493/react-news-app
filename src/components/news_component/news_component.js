import React, {Component} from 'react';
import logo from './../../logo.svg';
import './news_component.css'
import $ from "jquery"


class News_component extends Component {
    toggel_hover = (e) => {
        console.log(e.currentTarget);
        $(e.currentTarget).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);

    }
    state = {
        articles: []
    };
    create_cards = () => {
        let cards = [];
        this.state.articles.map((value, index) => {
            cards.push(
                <div className="col-4 mb-2" key={index}>
                    <div className="post-module" onMouseEnter={this.toggel_hover} onMouseLeave={this.toggel_hover}>
                        <div className="thumbnail">
                            <img src={value.urlToImage}/>
                        </div>

                        <div className="post-content">
                            <div className="category">{value.source.name}</div>
                            <h2 className="sub_title">{value.title}</h2>
                            <p className="description">{value.content}</p>

                        </div>
                    </div>
                </div>
            )
        });
        return cards;
    };

    componentDidMount() {

        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=5be9697bc34b41418b1c206fbde1fda1')
            .then(res => res.json())
            .then((data) => {
                this.setState({articles: data.articles});

            })
            .catch(console.log);

    }

    render() {
        return (
            <div className="container-fluid mt-4">
                <div className="row">
                    {this.create_cards()}


                </div>
            </div>
        );
    }
}

export default News_component;
