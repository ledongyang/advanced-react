import React from 'react';
import ArticelList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a'
      },
      b: {
        id: 'b'
      },
      c: {
        id: 'c'
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
