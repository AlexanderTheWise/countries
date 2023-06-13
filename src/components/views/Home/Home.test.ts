import { fireEvent, render, screen } from "@testing-library/vue";
import Home from "./Home.vue";
import router from "@/router";
import countries from "@/mocks/data";

global.fetch = vi
  .fn()
  .mockImplementation(() => ({ json: () => Promise.resolve(countries) }));

describe("Home component", () => {
  beforeEach(() => {
    render(Home, {
      global: {
        stubs: ["font-awesome-icon"],
        plugins: [router],
      },
    });
  });

  it("should render a search input with label 'Search for a country'", () => {
    const input = screen.getByLabelText("Search for a country");

    expect(input).toBeDefined();
  });

  it("should render two CountryCards with headings 'Spain' and 'Portugal'", () => {
    const spainHeading = screen.getByRole("heading", {
      name: "Spain",
    });

    const portugalHeading = screen.getByRole("heading", {
      name: "Portugal",
    });

    expect(spainHeading).toBeDefined();
    expect(portugalHeading).toBeDefined();
  });

  it("should show only Spain card if we type 'Spain' on the search input", async () => {
    const input = screen.getByLabelText("Search for a country");

    expect(screen.getByText("Spain")).toBeDefined();
    expect(screen.getByText("Portugal")).toBeDefined();

    await fireEvent.update(input, "Spain");

    expect(screen.getByText("Spain")).toBeDefined();
    expect(screen.queryByText("Portugal")).toBeNull();
  });
});
