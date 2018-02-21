class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    componentDidMount() {        
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (err) { }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return option != optionToRemove;
                })
            };
        });
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item!';
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'This option already exists!';
        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                };
            });

            return false;
        }
    }

    handlePick() {
        const pick = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[pick];
        alert(option);
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={ subtitle } />
                <Action hasOptions={ this.state.options.length > 0 } handlePick={ this.handlePick } />
                <Options
                    options={ this.state.options }
                    handleDeleteOptions={ this.handleDeleteOptions }
                    handleDeleteOption={ this.handleDeleteOption }
                />
                <AddOption handleAddOption={ this.handleAddOption }/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header= (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            { props.subtitle &&
                <h2>{ props.subtitle }</h2>
            }
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={ props.handlePick }
                disabled={ !props.hasOptions }
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button name="remove-all" onClick={ props.handleDeleteOptions }>Remove all</button>
            { props.options.length === 0 &&
                <p>Please add an option to get started</p>
            }
            { props.options.map((option) => (
                <Option key={ option }
                    optionText={ option }
                    handleDeleteOption={ props.handleDeleteOption }
                />)
            )}
        </div>
    );
} ;

const Option = (props) => {
    return (
        <div>
            { props.optionText }
            <button
                onClick={ () => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(evt) {
        evt.preventDefault();

        const option = evt.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        // if (error) alert(error);
        if (!error) evt.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error &&
                <p>{ this.state.error }</p>
                }
                <form onSubmit={ this.handleAddOption }>
                    <input type="text" name="option"/>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));