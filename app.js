const Hello = ({name}) => {
return React.createElement('div', null, `这是 ${name}`);
};

const helloWorld = React.createElement(Hello, {name: '版本五'}, null);
ReactDOM.render(helloWorld, document.getElementById('root'));