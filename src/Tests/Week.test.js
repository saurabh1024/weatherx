import Week from '../components/Week'
import { screen, render, fireEvent } from '@testing-library/react';

describe('Week', () => {
    it('renders without crashing', () => {
        render(<Week />)
    })

    test('triggers upcoming week button', () => {
        render(<Week lat={0} lon={0} />)
        fireEvent.click(screen.getByText(/Upcoming Week/))
    })

    test('triggers past week button', () => {
        render(<Week lat={0} lon={0} />)
        fireEvent.click(screen.getByText(/Past Week/))
    })
});