import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const successMessageFalse = screen.queryByTestId('successMessage');
    expect(successMessageFalse).not.toBeInTheDocument();

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const checkButt = screen.queryByRole(/button/);
    expect(checkButt).toBeInTheDocument();
    
    userEvent.type(firstNameInput, "Free");
    userEvent.type(lastNameInput, 'Dominguez');
    userEvent.type(addressInput, '16397 Placeholder rd');
    userEvent.type(cityInput, 'Los Angeles');
    userEvent.type(stateInput, 'CA');
    userEvent.type(zipInput, '12345');
    userEvent.click(checkButt);
    const successMessageTrue = await screen.queryByTestId('successMessage');
    const firstName = await screen.queryByText(/free/i);
    const lastName = await screen.queryByText(/dominguez/i);
    const address = await screen.queryByText(/16397 placeholder rd/i);
    const city = await screen.queryByText(/los angeles/i);
    const state = await screen.queryByText(/CA/);
    const zip =  await screen.queryByText(/12345/)
    
    expect(successMessageTrue).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();
});
