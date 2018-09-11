class Hello {
    render() {
        return React.createElement('div', null, `版本四，类组件的实现`);
    }
}

const helloWorld = React.createElement(Hello, null, null);
ReactDOM.render(helloWorld, document.getElementById('root'));