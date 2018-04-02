import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // ES7 class properties
  state = {
    answer: 55
  };

  // ES7 class method autobinding
  asyncFunc = () => {
    return Promise.resolve(31);
  };

  // async/await syntax
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>Hello Class Component! {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
