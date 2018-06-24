import React, {Component} from 'react';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>;
        return (
            <div className="card m-x-auto" style = {{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick = {() => this.handleClick()} className="btn btn-primary btn-lg pull-xs-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-block">
                    <h6 className="card-subtitle text-muted">
                        create date: {new Date(article.date).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        );
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article;