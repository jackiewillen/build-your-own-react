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
