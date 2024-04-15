import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  

  expect(getByText(/learn/i)).toBeInTheDocument();
});

test('secondtest', ()=>{
 const getByText2 = render(
  <Provider store={store}>
    <App></App>
  </Provider>
 )
})


