（1）第十四版之后是对React.js中还存在的缺陷作一个修改
缺陷一：子组件是类组件的支持。 done 
缺陷二：修复React.js中setState使用this.state = state;导致旧状态丢失的问题。 done
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

