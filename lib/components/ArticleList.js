import React from 'react';
import Article from './Article';

class ArticleList extends React.PureComponent {
  render() {
    const {articles} = this.props;
    return (
      <div>
        {
          Object.values(articles).map((article) => {
            return <Article
              key={article.id}
              article={article}
            />;
          })
        }
      </div>
    );
  }
}

export default ArticleList;
