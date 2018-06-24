import React, {Component} from 'react';

class Article extends Component {
    constructor(props) {
        super(props);
        
        console.log('constructor');

        this.state = {
            isOpen: props.defaultOpen
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        if(nextProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen: nextProps.defaultOpen
            });
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
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

    componentDidMount(prevProps, prevState) {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article;