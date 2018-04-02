import React from 'react';
import Article from './Article';

const ArticleList = ({articles, articleActions}) => {

  return (
    <div>
      {
        Object.values(articles).map((article) => {
          return <Article
            key={article.id}
            article={article}
            actions={articleActions}
          />;
        })
      }
    </div>
  );

};

export default ArticleList;
