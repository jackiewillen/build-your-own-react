（1）app.js实现向React组件中添加子组件的效果如：

const HelloVersion3 = function () {
    return React.createElement('div', null, `版本3.0`);
};
const helloWorld1 = React.createElement(HelloVersion3, null, null);
const helloWorld2 = React.createElement(HelloVersion3, null, null);
const divEle = React.createElement('div', null, `我被一个div标签包裹`);

const parent = React.createElement('div', null,
        helloWorld1,
        helloWorld2,
        divEle,
        `我是文本内容哦`
);

ReactDOM.render(parent, document.getElementById('root'));