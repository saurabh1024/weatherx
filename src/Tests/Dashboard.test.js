import { getByRole, getByText, getByTitle, render} from '@testing-library/react';
import Dashboard from '../components/Dashboard';

describe('Dashboard Component', () => {
   it('renders without crashing', () => {
      render(<Dashboard />);
   });

   it('has search input', () => {
      const { getByPlaceholderText } = render(<Dashboard />);
      const searchInput = getByPlaceholderText('Search for a location');
      expect(searchInput).toBeInTheDocument();
   });

   it('has search button', () => {
      const { getByRole } = render(<Dashboard />);
      const searchButton = getByRole('button', { name: 'search' });
      expect(searchButton).toBeInTheDocument();
   })
});

   



