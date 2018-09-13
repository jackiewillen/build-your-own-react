（1）实现React.js对于HTML标签的属性如class样式设计的支持：

const ReactEle = React.createElement('span', {className: 'common-class'},'我是一个有样式的span标签');
ReactDOM.render(ReactEle, document.getElementById('root'));
