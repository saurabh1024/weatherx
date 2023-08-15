import { Kpi } from "../components/Kpi";
import {render, screen} from '@testing-library/react';

describe('Kpi', () => {
    it('should render the Kpi component', () => {
        render(<Kpi />);
        const kpiElement = screen.getByText(`Today's Hightlights`);
        expect(kpiElement).toBeInTheDocument();
    });

    it('should render humidity KPI', () => {
        render(<Kpi />);
        const humidityElement = screen.getByText(`Humidity`);
        expect(humidityElement).toBeInTheDocument();
    });

    it('should render wind speed KPI', () => {
        render(<Kpi />);
        const humidityElement = screen.getByText(`Wind Speed`);
        expect(humidityElement).toBeInTheDocument();
    });

    it('should render Visibility KPI', () => {
        render(<Kpi />);
        const humidityElement = screen.getByText(`Visibility`);
        expect(humidityElement).toBeInTheDocument();
    });

    it('should render Pressure KPI', () => {
        render(<Kpi />);
        const humidityElement = screen.getByText(`Pressure`);
        expect(humidityElement).toBeInTheDocument();
    });
        
})
