
class TitleComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement('span',null,'这是一个Title标签');
    }
}
let myComponent = React.createElement('div',null,'我是最外层的div',
React.createElement(TitleComponent,null));
ReactDOM.render(myComponent, document.getElementById('root'));