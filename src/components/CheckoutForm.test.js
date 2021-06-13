import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

const nameInput = screen.getByLabelText(/first name/i);
const lastNameInput = screen.getByLabelText(/last name/i);
const addressInput = screen.getByLabelText(/address/i);
const cityInput = screen.getByLabelText(/city/i);
const stateInput = screen.getByLabelText(/state/i);
const zipInput = screen.getByLabelText(/zip/i);
const buttonInput = screen.getByRole('button', /checkout/i);

userEvent.type(nameInput, 'Jordan');
userEvent.type(lastNameInput, 'Belfort');
userEvent.type(addressInput, 'Wall Street');
userEvent.type(cityInput, 'NYC');
userEvent.type(stateInput, 'New York');
userEvent.type(zipInput, '12345');
userEvent.click(buttonInput);

const successMessage = screen.getByTestId("successMessage");

expect(successMessage).toBeInTheDocument();
expect(successMessage).toHaveTextContent('You have ordered some plants! Woo-hoo!');
expect(successMessage).toHaveTextContent('Your new green friends will be shipped to:');
expect(successMessage).toHaveTextContent('Jordan Belfort')
expect(successMessage).toHaveTextContent('Wall Street')
expect(successMessage).toHaveTextContent('NYC, New York 12345')


});
