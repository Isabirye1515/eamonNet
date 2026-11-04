import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./components/heading', () => () => null);
jest.mock('./components/Faqs', () => () => null);

test.each([
  ['/', 'EAMON'],
  ['/services', 'Dreadlock Services in Kampala'],
  ['/offers', 'Why Choose Eamon Dreads in Kampala'],
  ['/gallery', 'Dreadlock Styles Gallery in Kampala'],
  ['/blog', 'Stories, styles & inspiration'],
  ['/contact', 'Let’s talk about your style'],
])('renders an H1 on %s', (route, heading) => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heading);
});
