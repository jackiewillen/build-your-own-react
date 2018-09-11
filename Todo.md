（1）app.js实现React 函数组件带参数属性的实现：

const Hello = ({name}) => {
  return React.createElement('div', null, `Hello ${name}`);
};

const helloWorld = React.createElement(Hello, {name: 'Ofir'}, null);
ReactDOM.render(helloWorld, document.getElementById('root'));