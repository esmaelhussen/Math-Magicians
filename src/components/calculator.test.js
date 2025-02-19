import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './calculator';

describe('calculator page', () => {
  it('calculator page should be render', () => {
    const calculator = render(
    );
    expect(calculator).toMatchSnapshot();
  });
});
