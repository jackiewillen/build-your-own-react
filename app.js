
const ReactEle = React.createElement('div', {
    className: 'common-class', 
    style: {marginTop: '100px',color: 'blue', border:'1px solid solid'}},
    '我是一个有样式的span标签');
ReactDOM.render(ReactEle, document.getElementById('root'));