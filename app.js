
const ReactEle = React.createElement('input', {onFocus: function(){console.log('我被聚焦了')}});
ReactDOM.render(ReactEle, document.getElementById('root'));