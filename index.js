// Import stylesheets
import './style.css';
import ReactDom from 'react-dom';
import React from 'react';

// Write Javascript code!
const appDiv = document.getElementById('hi');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }
  press() {
    console.log(this);
    alert('Hello React!');
  }
  render() {
    return <button onClick={this.press}>Click</button>;
  }
}
ReactDom.render(<ClickButton />, document.getElementById('app'));
