import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return option != optionToRemove;
                })
            };
        });
    }

    handleAddOption = (option) => {
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

    handlePick = () => {
        const pick = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[pick];
        this.setState(() => ({
            selectedOption: option
        }));
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

    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={ subtitle } />
                <div className='container'>
                    <Action
                        hasOptions={ this.state.options.length > 0 }
                        handlePick={ this.handlePick }
                    />
                    <div className='widget'>
                        <Options
                            options={ this.state.options }
                            handleDeleteOptions={ this.handleDeleteOptions }
                            handleDeleteOption={ this.handleDeleteOption }
                        />
                        <AddOption handleAddOption={ this.handleAddOption }/>
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};