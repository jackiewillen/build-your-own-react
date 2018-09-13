（1）同时实现类组件的动态渲染和函数组件以及HTML标签组件的渲染：

function Title() {
    return React.createElement('div',null,'我是函数组件');
}
let myCounter = React.createElement(Title,null,null);
ReactDOM.render(myCounter, document.getElementById('root'));