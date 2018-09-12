class MyButton extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return React.createElement('button', {onclick: this.props.onClick}, `Click me`);
    }
}
  const myBtn = React.createElement(MyButton, {onClick: () => alert('点击事件触发')}, null);
  ReactDOM.render(myBtn, document.getElementById('root'));