（1）第十四版之后是对React.js中还存在的缺陷作一个修改
缺陷一：子组件是类组件的支持

class TitleComponent extends React.component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement('span',null,'这是一个Title标签');
    }
}
let myComponent = React.createElement('div',null,'我是最外层的div',React.createElement(TitleComponent,null,null));
ReactDOM.render(myComponent, document.getElementById('root'));


具体可以参考
https://www.robinwieruch.de/react-ref-attribute-dom-node/