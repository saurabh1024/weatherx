import { render } from '@testing-library/react'
import { Day } from '../components/Day'
import moment from 'moment'

describe('Day', () => {
    it('renders without crashing', () => {
        render(<Day />)
    })

    it('renders the day', () => {
        const {getByText} = render(<Day date={moment().format('YYYY-MM-DD')} />)
        expect(getByText('Today')).toBeInTheDocument()
    })
})
