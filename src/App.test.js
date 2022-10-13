import {render} from '@testing-library/react';
import App from './App';

test('renders', () => {
  const {getByTestId} = render(<App/>);

  expect(getByTestId('logo')).toBeInTheDocument();
  expect(getByTestId('icon-facebook')).toBeInTheDocument();
  expect(getByTestId('icon-instagram')).toBeInTheDocument();
  expect(getByTestId('icon-youtube')).toBeInTheDocument();
  expect(getByTestId('icon-spotify')).toBeInTheDocument();
});
