import React from 'react';

const Option = (props) => {
    return (
        <div className='option'>
            <p className='option__text'>
                { `${props.count}. ${props.todo.value}` }
            </p>
            <button
                className='button button--link'
                onClick={ () => {
                    props.handleDeleteTodo(props.todo);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default Option;