import React from 'react';
import { render } from '@testing-library/react';
import Quote from './quote';

describe('Quote page', () => {
  it('quote page should be render', () => {
    const quote = render(
      <Quote />,
    );
    expect(quote).toMatchSnapshot();
  });
});
