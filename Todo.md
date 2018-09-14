（1）实现React.js对于HTML标签的属性如style设计的支持：


const ReactEle = React.createElement('div', {className: 'common-class', style: {marginTop: '300px'}},'我是一个有样式的span标签');
ReactDOM.render(ReactEle, document.getElementById('root'));
