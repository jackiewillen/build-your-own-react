// 防止局部变量污染全局，只暴露全局的方法
(() => {
    let rootElement, rootReactElement;
    const REACT_CLASS = 'REACT_CLASS';
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
            // （1）、当为类组件时
            let component = new parentEle(props);
            component.type = REACT_CLASS;
            return component;
        } else if (typeof parentEle === 'function') {
            // （2）、当为函数组件时
            return parentEle(props);
        } else {
            // （3）、当为html标签组件时
            let parentElement = document.createElement(parentEle);
            Object.keys(props || {}).forEach(key => {
                if(/^on.*$/.test(key)) {
                    eventName = key.slice(2).toLowerCase();
                    parentElement.addEventListener(eventName, props[key]);
                } else if(key ==='className') {
                    parentElement.setAttribute('class',props[key]);
                } else {

                }
            });
            childEles.forEach(child => {
                if(typeof child === 'string') {
                    // (1)当子元素是一个字符时
                    parentElement.innerHTML += child;
                } else if (Array.isArray(child)) {
                    // (2)当子元素是一个数组中包含多个Node节点时
                    child.forEach((childItem) => parentElement.appendChild(childItem));
                } else if(typeof child === 'object') {
                    // (3)当子元素是一个Node节点是直接附加到父节点
                    parentElement.appendChild(child);
                }
            });
            return parentElement;
        }
    }
    function render(insertEle, rootEle) {
        rootElement = rootEle;
        rootReactElement = insertEle;
        let currentEle = rootReactElement.type === 'REACT_CLASS' ? rootReactElement.render() : rootReactElement;
        rootEle.appendChild(currentEle);
    }

    function reRender() {
        while(rootElement.hasChildNodes()) {
            rootElement.removeChild(rootElement.lastChild);
        }
        ReactDOM.render(rootReactElement, rootElement);
    }

    window.React = {
        createElement,
        Component
    }
    window.ReactDOM = {
        render
    }
})();