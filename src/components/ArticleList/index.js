import React, {Component} from 'react';
import Article from '../Article';
import './style.css';

// reverse data flow - обратный поток данных - меняем состояние родителя из дочернего элемента
// state lifting - вынесение стейта на уровень выше и передача компоненту как проперти
class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeArticleId: null
        };
    }
    render() {
        const {articles} = this.props;
        console.log(articles);
        const articleElements = articles.map((article, index) => 
            <li key = {article.id} className="article-list__li">
                <Article 
                    article = {article}
                    isOpen = {article.id === this.state.activeArticleId}
                    onButtonClick = {this.handleClick.bind(this)}  
                />
            </li>
        );
        return (
            <ul>
                {articleElements}
            </ul>
        );
    }

    handleClick(articleId) {
        this.setState({
            activeArticleId: articleId === this.state.activeArticleId ? null : articleId 
        });
    }
}

export default ArticleList;