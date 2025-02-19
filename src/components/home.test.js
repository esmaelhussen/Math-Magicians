import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';

describe('home page', () => {
  it('home page should be render', () => {
    const home = render(
      <Home />,
    );
    expect(home).toMatchSnapshot();
  });
});
