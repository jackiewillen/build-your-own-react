class Component {
    constructor(props) {
        this.props = props;
    }
}
function createElement(parentEle, props, ...childEles) {
    if (typeof parentEle === 'function' && /^\s*class\s+/.test(parentEle.toString())) {
        // 当为类组件时
        let component = new parentEle(props);
        return component.render();
    } else if (typeof parentEle === 'function') {
        // 当为函数组件时
        return parentEle(props);
    } else {
        // 当为html标签组件时
        let parentElement = document.createElement(parentEle);
        Object.keys(props).forEach(key => {
            switch(key) {
                case 'onclick':
                    parentElement.addEventListener('click', props[key]);
                    break;
                default:
                    break;
            }
        });
        childEles.forEach(child => {
            if(typeof child === 'string') {
                parentElement.innerHTML += child;
            } else if(typeof child === 'object') {
                parentElement.appendChild(child);
            }
        });
        return parentElement;
    }
}
function render(insertEle, rootEle) {
    rootEle.appendChild(insertEle);
}
React = {
    createElement,
    Component
}
ReactDOM = {
    render
}