console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (evt) =>  {
    evt.preventDefault();

    const option = evt.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        evt.target.elements.option.value = '';
        rerender();
    }
};

const onRemoveAll = () => {
    app.options.length = 0;
    rerender();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const rerender = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1> 
            { app.subtitle && <p>{ app.subtitle }</p> }
            <button disabled={ app.options.length == 0 } onClick={ onMakeDecision }>What should I do?</button>
            &nbsp;&nbsp;
            <button disabled={ app.options.length == 0 } onClick={ onRemoveAll }>Remove All</button>
            { app.options.length > 0 &&
                <div>
                    <p>Here are your options</p>
                    <ol>
                        { app.options.map(opt => <li key={ opt }>{ opt }</li>) }
                    </ol>
                </div>
            }
            { app.options.length == 0 &&
                <p>There are no options</p>
            }
            <form onSubmit={ onFormSubmit }>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

rerender();