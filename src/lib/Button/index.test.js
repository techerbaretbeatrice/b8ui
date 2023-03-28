import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

/*test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});*/

describe("Button component should", () => {
    describe("When a title is set as props", () => {
        test("Display a title string in a <button> element", () => {
            render(<Button title="buttonTest" />)
            const buttonElement = screen.getByText(/buttonTest/)
            expect(buttonElement).toBeInTheDocument()
            expect(buttonElement.tagName).toEqual("BUTTON")
        })
    })

    describe("When a click is handled on a button", () => {
        test("Should call a onClick function passed as props", () => {
            const onClick = jest.fn()
            render(<Button title="buttonTest" onClick={onClick} />)
            const buttonElement = screen.getByText(/buttonTest/)
            expect(buttonElement).toBeInTheDocument()
            fireEvent(
                buttonElement,
                new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                })
            )
            expect(onClick).toHaveBeenCalled()
        })
    })

})
