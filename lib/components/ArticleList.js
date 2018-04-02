import React from 'react';
import Article from './Article';

const ArticleList = ({articles, authors}) => {

  return (
    <div>
      {
        Object.values(articles).map((article) => {
          return <Article
            key={article.id}
            article={article}
            author={authors[article.authorId]}
          />;
        })
      }
    </div>
  );

};

export default ArticleList;
