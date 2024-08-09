import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurentData.json";
import "@testing-library/jest-dom";

it("should render the restaurant card component with props data", () => {

    render(<RestaurantCard restaurantData={{ info: MOCK_DATA }} />);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
});
