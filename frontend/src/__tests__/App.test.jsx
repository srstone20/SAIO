import App from '../App'
import {render,screen} from '@testing-library/react'

test("should have hello world", () => {
    render(<App />);
    const message = screen.queryByText(/Content/i);
    expect(message).toBeVisible();
})