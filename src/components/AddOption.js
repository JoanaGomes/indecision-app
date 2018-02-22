import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(evt) {
        evt.preventDefault();

        const option = evt.target.elements.option.value.trim();

        const error = this.props.handleAddTodo(option);
        this.setState(() => ({ error }));

        // if (error) alert(error);
        if (!error) evt.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error &&
                <p className='add-option-error'>{ this.state.error }</p>
                }
                <form
                    className='add-option' 
                    onSubmit={ this.handleAddTodo }
                >
                    <input className='add-option__input' type="text" name="option"/>
                    <button type="submit" className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}