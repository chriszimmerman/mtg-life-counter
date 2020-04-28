import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { StateMock } from '@react-mock/state';
import LifeCounter from './LifeCounter';

const renderComponent = ({ life }) =>
  render(
    <StateMock state={{ life }}>
      <LifeCounter player={1}/>
    </StateMock>
  );

it('increments count', async () => {
  const { getByText } = renderComponent({ life: 20 });

  fireEvent.click(getByText('+'));
  await waitForElement(() => getByText(/21/i));
});

it('decrements count', async () => {
  const { getByText } = renderComponent({ life: 20 });

  fireEvent.click(getByText('-'));
  await waitForElement(() => getByText(/19/i));
});