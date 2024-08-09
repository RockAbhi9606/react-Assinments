import { render, screen } from "@testing-library/react"
import Contact from "../ContactUs"
import "@testing-library/jest-dom"


//it is a aliece of test method there no any difference

describe("Contact us component test cases", () => {

  test("Should load contact us component", () => {
    render(<Contact />)
    const heading = screen.getByRole('heading');

    //Assertion
    expect(heading).toBeInTheDocument();

  })

  test("Should load submit button in contact us component", () => {
    render(<Contact />)
    const button = screen.getByText("Submit")

    //Assertion
    expect(button).toBeInTheDocument();
  })

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />)
    const inputBox = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBox.length).toBe(2);
  })

  it("Should load placeholde inside input boxes on the contact component", () => {
    render(<Contact />)
    const placeholder = screen.getByPlaceholderText("Enter your username");

    //Assertion
    expect(placeholder).toBeInTheDocument();
  })

})


