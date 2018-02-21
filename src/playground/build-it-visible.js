/* let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ toggleVisibility }>
                { visibility ? 'Hide details' : 'Show details'}
            </button>
            { visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ŔeactDOM.render(jsx, document.getElementById('app'));
};

render();*/

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        };
        this.hanbdleToggleVisibility = this.hanbdleToggleVisibility.bind(this);
    }

    hanbdleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ this.hanbdleToggleVisibility }>
                { this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            { this.state.visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));