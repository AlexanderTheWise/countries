import type { SimpleCountry } from "@/types";
import CountryCard from "./CountryCard.vue";
import { render, screen } from "@testing-library/vue";
import router from "@/router";
import countries from "@/mocks/data";

describe("CountryCard component", () => {
  const country: SimpleCountry = countries[0];

  beforeEach(() => {
    render(CountryCard, {
      props: {
        country,
      },
      global: {
        plugins: [router],
      },
    });
  });

  describe("when it receives a country as a prop", () => {
    it("should render a heading with the common name of the country", () => {
      const heading = screen.getByRole("heading", {
        name: country.name.common,
      });

      expect(heading).toBeDefined();
    });

    it("should render image with alternative text 'The spain flag is called rojigualda'", () => {
      const image = screen.getByAltText(country.flags.alt);

      expect(image).toBeDefined();
    });

    it("should render text paragraph 'Population: 47.000.000'", () => {
      const populationText = screen.getByText("47.000.000");

      expect(populationText.textContent).toBe("Population: 47.000.000");
    });

    it("should render a link to /Spain page", () => {
      const link = screen.getByRole("link");

      expect((link as HTMLAnchorElement).href.endsWith("/Spain")).toBeTruthy();
    });
  });
});
