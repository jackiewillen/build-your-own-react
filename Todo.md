（1）实现React.js支持数组子元素的传入：

const ReactEle = React.createElement('div', null, [
    React.createElement('span',null, '你好！'),
    React.createElement('span',null, '啊...')
]);
ReactDOM.render(ReactEle, document.getElementById('root'));
