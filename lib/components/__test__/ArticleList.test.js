import React from 'react';
import ArticelList from '../ArticleList';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticelList
        {...testProps}
      />
    );

    expect(wrapper.find('ArticleContainer').length).toBe(3);

    expect(wrapper).toMatchSnapshot();
  });
});
