import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../../components/Button/Button";

describe("Button", () => {
  test("show the title", () => {
    const { getByText } = render(
      <Button title={"test"} onPress={() => console.log("test")} />
    );
    const el = getByText("test");
    expect(el).toBeTruthy();
  });

  test("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { debug, getByText } = render(
      <Button title={"button"} onPress={onPress} />
    );
    debug();
    const button = getByText("button");
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
;
});
