import router from "@/router";
import Header from "./Header.vue";
import { render, screen } from "@testing-library/vue";

describe("Header component", () => {
  beforeEach(() => {
    render(Header, {
      global: {
        plugins: [router],
      },
    });
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
});
