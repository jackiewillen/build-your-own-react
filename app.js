const Hello = function () {
    return React.createElement('div', null, `Hello Version2.0`);
};
const helloWorld = React.createElement(Hello, null, null);
ReactDOM.render(helloWorld, document.getElementById('root'));