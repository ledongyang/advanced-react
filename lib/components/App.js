import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      authors: {}
    };
  }

  async componentDidMount() {
    const res = await axios.get('/data');
    const api = new DataApi(res.data);
    this.setState(() => {
      return {
        articles: api.getArticles(),
        authors: api.getAuthors()
      };
    });
  }

  articleActions = {
    lookUpAuthor: (authorId) => this.state.authors[authorId]
  }

  render() {
    const {articles} = this.state;
    return (
      <ArticleList
        articles={articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
