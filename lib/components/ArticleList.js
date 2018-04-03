import React from 'react';
import Article from './Article';

const ArticleList = ({articles}) => {

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

};

export default ArticleList;
