import React from 'react';
import { shallow } from 'enzyme';

import Single from './Single';

describe('<Single/>', () => {
  it('should render correctly in debug mode', () => {
    const component = shallow(<Single debug />);
    expect(component).toMatchSnapshot();
  });
});
