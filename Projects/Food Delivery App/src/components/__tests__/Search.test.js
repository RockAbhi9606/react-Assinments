import { render, fireEvent, screen, waitFor, act } from "@testing-library/react";
import CardContainer from "../CardContainer";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/restaurentList.json";
import UserContext from "../../utils/useContext";
import SearchComponent from "../SearchComponent";
import RestaurantCard from "../RestaurantCard";

// Mock fetch to return mock data
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ info: MOCK_DATA }),
    })
);

describe("CardContainer", () => {
    it("should display 3 cards when user searches for 'pizza'", async () => {
        const searchInput = "";
        const setSearchInput = jest.fn();

        // Render the component with UserContext provider
        await act(async () => {
            render(
                <UserContext.Provider value={{ searchInput, setSearchInput }}>
                    <BrowserRouter>
                        <CardContainer />
                        <RestaurantCard restaurantData={MOCK_DATA} />
                    </BrowserRouter>
                </UserContext.Provider>
            );
        });

        await act(async () => {
            const input = screen.getAllByTestId('content-input'); // Select input data-testid
            fireEvent.change(input, { target: { value: 'pizza' } });
        });
        debug(input)
        const cards = screen.getAllByTestId("resCard");
        expect(cards.length).toBe(3); // Ensure exactly 3 cards are displayed
    });
});
