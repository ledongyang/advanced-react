import React from 'react';
import ArticelList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a',
        title: 'a',
        body: 'a',
        date: 'a'
      },
      b: {
        id: 'b',
        title: 'b',
        body: 'b',
        date: 'b'
      },
      c: {
        id: 'c',
        title: 'c',
        body: 'c',
        date: 'c'
      }
    },
    store: {
      lookUpAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticelList
        {...testProps}
      />
    ).toJSON();

    expect(tree.children.length).toBe(3);

    expect(tree).toMatchSnapshot();
  });
});
