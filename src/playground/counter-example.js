class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() {
        const json = localStorage.getItem('count');
        const count = parseInt(json, 10);
        
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });

    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick={ this.handleAddOne }>+1</button>
                <button onClick={ this.handleMinusOne }>-1</button>
                <button onClick={ this.handleReset }>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/* let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const subtractOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={ addOne }>+ 1</button>
            &nbsp;&nbsp;
            <button onClick={ subtractOne }>- 1</button>
            &nbsp;&nbsp;
            <button onClick={ reset }>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();*/