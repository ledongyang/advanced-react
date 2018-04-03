import React from 'react';
import ArticleList from './ArticleList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.store.getState();
  }

  render() {
    const {articles} = this.state;
    return (
      <ArticleList
        articles={articles}
        store={this.props.store}
      />
    );
  }
}

export default App;
