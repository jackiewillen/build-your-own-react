function Title() {
    return React.createElement('div',null,'我是函数组件');
}
let Title = React.createElement(Title,null,null);
ReactDOM.render(Title, document.getElementById('root'));