import App from "../App";
import { render } from "@testing-library/react";

describe('App component', () => { 
    it('should render header text', () => {
        const { container } = render(<App />);
        const header = container.querySelector('h1');
        expect(header.textContent).toBe('Weatherx');
    });
 })

   