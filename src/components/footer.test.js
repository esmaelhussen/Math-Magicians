import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

describe('Footer page', () => {
  test('footer page should be render', () => {
    const footer = render(
      <Footer />,
    );
    expect(footer).toMatchSnapshot();
  });
});
