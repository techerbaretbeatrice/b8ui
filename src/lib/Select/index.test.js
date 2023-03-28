import { fireEvent, render, screen } from '@testing-library/react';
import Select from './index';

/*test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});*/

describe("Select component should", () => {
    describe("When a label is set as props", () => {
        test("Display a label string in a <label> element", () => {
            render(<Select label="labelTest" />)
            const labelString = screen.getByText(/labelTest/)
            expect(labelString).toBeInTheDocument()
            expect(labelString.tagName).toEqual("LABEL")
        })
    })

    xdescribe("When we pass a list of strings passed as options props", () => {
        test("Display each item as value and option in the select when a click is handled on the select", () => {
            render(<Select options={["valueA", "valueB"]} />)
            const defaultOption = screen.getByText("valueA")
            fireEvent(
                defaultOption,
                new MouseEvent('click',
                    {
                        bubbles: true,
                        cancelable: true
                    })
            )
            const secondOption = screen.getByText("valueB")
            expect(secondOption).toBeInTheDocument()
        })
    })

    xdescribe("When we pass a list of objects key/value", () => {
        test("Display each item key as option and item value as value in the select when a click is handled on the select", () => {
            render(<Select options={[{ key: "optionA", value: "valueA" }, { key: "optionB", value: "valueB" }]} />)
            const defaultOption = screen.getByText("optionA")
            fireEvent(
                defaultOption,
                new MouseEvent('click',
                    {
                        bubbles: true,
                        cancelable: true,
                    })
            )
            const secondOption = screen.getByText("optionB")
            expect(secondOption).toBeInTheDocument()
        })
    })

    describe("When we pass an object", () => {
        test("Display each object key as option and object value as value in the select", () => {
            render(<Select options={{ optionA: "valueA", optionB: "valueB" }} />)
            const defaultOption = screen.getByText("optionA")
            fireEvent(
                defaultOption,
                new MouseEvent('click',
                    {
                        bubbles: true,
                        cancelable: true,
                    })
            )
            const secondOption = screen.getByText("optionB")
            expect(secondOption).toBeInTheDocument()
        })
    })

    describe("When a click on the select is handled", () => {
        describe("If the dropdown is already opened", () => {
            test("The dropdown is closed", () => {
                render(<Select options={{ optionA: "valueA", optionB: "valueB" }} />)
                const selectContainer = screen.getByTestId("selectContainer")
                const defaultOption = screen.getByText("optionA")

                fireEvent(
                    defaultOption,
                    new MouseEvent('click',
                        {
                            bubbles: true,
                            cancelable: true,
                        })
                )

                expect(selectContainer.dataset.testopened).toEqual("true")

                fireEvent(
                    defaultOption,
                    new MouseEvent('click',
                        {
                            bubbles: true,
                            cancelable: true,
                        })
                )

                expect(selectContainer.dataset.testopened).toEqual("false")
            })
            describe("If the dropdown is closed", () => {
                test("The dropdown is open and displays each options", () => {
                    render(<Select options={{ optionA: "valueA", optionB: "valueB" }} />)
                    const selectContainer = screen.getByTestId("selectContainer")
                    const defaultOption = screen.getByText("optionA")

                    fireEvent(
                        defaultOption,
                        new MouseEvent('click',
                            {
                                bubbles: true,
                                cancelable: true,
                            })
                    )

                    const secondOption = screen.getByText("optionB")
                    const firstOption = screen.getAllByText("optionA")
                    expect(secondOption).toBeInTheDocument()
                    expect(firstOption[0]).toBeInTheDocument() // defaultOption
                    expect(firstOption[1]).toBeInTheDocument() // optionA
                })
            })
        })

        xdescribe("When a option is selected", () => {
            test("The onSelect method passed as props is called with the selected value as parameter", () => {
                expect(true).toEqual(false)
            })
            test("The selected value is displayed", () => {
                expect(true).toEqual(false)
            })
            test("The dropdown is closed", () => {
                expect(true).toEqual(false)
            })
        })

        xdescribe("When a height props is passed", () => {
            test("A specific className is added to the container component", () => {

                expect(true).toEqual(false)
            })
        })
    })
})
