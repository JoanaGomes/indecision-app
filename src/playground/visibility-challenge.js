let detailsVisible = false;

const toggleDetails = () => {
    detailsVisible = !detailsVisible;

    rerender();
}


const appRoot = document.getElementById('app');

const rerender = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ toggleDetails }>{ detailsVisible ? 'Hide Details' : 'Show Details' }</button>
            { detailsVisible &&
                <p>Hey, these are some detailes you can now see!</p>
            }
        </div>
    )

    ReactDOM.render(template, appRoot);
}

rerender();