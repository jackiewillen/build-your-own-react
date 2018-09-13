let rootElement, rootReactElement;
// React基础组件库
class Component {
    constructor(props) {
        this.props = props;
    }
    setState(state) {
        this.state = state;
        reRender();
    }
}

// React.createElement
function createElement(parentEle, props, ...childEles) {
    if (typeof parentEle === 'function' && /^\s*class\s+/.test(parentEle.toString())) {
        // 当为类组件时
        let component = new parentEle(props);
        return component;
    } else if (typeof parentEle === 'function') {
        // 当为函数组件时
        return parentEle(props);
    } else {
        // 当为html标签组件时
        let parentElement = document.createElement(parentEle);
        Object.keys(props || {}).forEach(key => {
            switch(key) {
                case 'onclick':
                    parentElement.addEventListener('click', props[key]);
                    break;
                case 'onClick':
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
    rootElement = rootEle;
    rootReactElement = insertEle;
    rootEle.appendChild(insertEle.render());
}

function reRender() {
    while(rootElement.hasChildNodes()) {
        rootElement.removeChild(rootElement.lastChild);
    }
    ReactDOM.render(rootReactElement, rootElement);
}

React = {
    createElement,
    Component
}
ReactDOM = {
    render
}