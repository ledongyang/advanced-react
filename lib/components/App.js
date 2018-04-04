import React from 'react';
import PropTypes from 'prop-types';
import pickby from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends React.PureComponent {

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext = () => {
    return {
      store: this.props.store
    };
  }

  appState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {
      articles,
      searchTerm
    };
  }

  state = this.appState();

  // the callback pass into the store subscribe
  onStoreChange = () => {
    this.setState(this.appState());
  }
  // subscribe to store, pass in a callback
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  // unsubscribe
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    let {articles, searchTerm} = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if (searchTerm) {
      articles = pickby(articles, (value) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles={articles}
        />
      </div>
    );
  }
}

export default App;
