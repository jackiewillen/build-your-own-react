（1）实现React.js对于不同种类事件的支持：

const ReactEle = React.createElement('input', {onFocus: function(){console.log('我被聚焦了')}});
ReactDOM.render(ReactEle, document.getElementById('root'));
