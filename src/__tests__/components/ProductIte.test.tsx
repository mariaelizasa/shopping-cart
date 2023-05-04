import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import ProductItem from "../../components/ProductItem/ProductItem";

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});
describe("ProductItem", () => {
  test("should render the component", () => {
    render(
      <ProductItem
        product={{
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: ["men's clothing", "men's clothing"],
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }}
      />
    );
  });
});
