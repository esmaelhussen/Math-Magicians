import React from 'react';
import { render } from '@testing-library/react';

describe('calculator page', () => {
  it('calculator page should be render', () => {
    const calculator = render(
      <Calculator />,
    );
    expect(calculator).toMatchSnapshot();
  });
});
