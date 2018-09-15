（1）第十五版主要是用于show off,我们把别人写好的一个扫雷游戏前端代码拷贝过来，React.js就用我们刚刚写好的React.js框架，运行成功了，怎么样，是不是对React.js的运行原理有些了解了。到这为止，React中的代码应该重构一下，但是为了更加便于阅读，所以就不改动了，另外，老夫也改不动了。先就到这吧。

class TitleComponent extends React.Component {
    setName() {
        // 设置年龄后姓名丢失
        this.setState({name:'jackie'});
    }
    setAge() {
        // 设置姓名后年龄丢失
        this.setState({age:'27'});
    }
    render() {
        return React.createElement('div',null ,`修改状态`,
                    React.createElement('span',{onClick:this.setName.bind(this)},`    修改姓名---姓名${this.state && this.state.name || undefined} `),
                    React.createElement('span',{onClick:this.setAge.bind(this)},`    修改年龄---年龄${this.state && this.state.age || undefined} `));
    }
}
let myComponent =React.createElement(TitleComponent,null,null);
ReactDOM.render(myComponent, document.getElementById('root'));

