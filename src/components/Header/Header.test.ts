import Header from "./Header.vue";
import { fireEvent, render, screen } from "@testing-library/vue";

describe("Header component", () => {
  beforeEach(() => {
    render(Header);
  });

  it("should render a title 'Where in the world?'", () => {
    const title = screen.getByRole("heading", {
      name: "Where in the world?",
    });

    expect(title).toBeDefined();
  });

  it("should render a button with 'Dark Mode' text", () => {
    const button = screen.getByRole("button", {
      name: "Dark Mode",
    });

    expect(button).toBeDefined();
  });

  it("should replace regular moon icon with filled icon", async () => {
    const button = screen.getByRole("button");

    expect(
      button.firstElementChild!.classList.contains("fa-regular")
    ).toBeTruthy();

    await fireEvent.click(button);

    expect(
      button.firstElementChild?.classList.contains("fa-solid")
    ).toBeTruthy();
  });
});
