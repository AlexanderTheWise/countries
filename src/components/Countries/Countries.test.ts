import { render, screen } from "@testing-library/vue";
import Countries from "./Countries.vue";
import countries from "@/mocks/data";
import router from "@/router";

describe("Countries component", () => {
  beforeEach(() => {
    render(Countries, {
      props: {
        countries,
      },
      global: {
        plugins: [router],
      },
    });
  });

  describe("when it receives a list of countries as list of countries as a prop", () => {
    it("should render two countries cards with headings 'Spain' and 'Portugal'", () => {
      const spainHeading = screen.getByRole("heading", {
        name: "Spain",
      });

      const portugalHeading = screen.getByRole("heading", {
        name: "Portugal",
      });

      expect(spainHeading).toBeDefined();
      expect(portugalHeading).toBeDefined();
    });

    it("should render spain and portugal flags images", () => {
      const spainImage = screen.getByRole("img", {
        name: countries[0].flags.alt,
      });

      const portugalImage = screen.getByRole("img", {
        name: countries[1].flags.alt,
      });

      expect(spainImage).toBeDefined();
      expect(portugalImage).toBeDefined();
    });

    it("should render the population of each of these countries", () => {
      const spainPopulation = screen.getByText("47.000.000");
      const portugalPopulation = screen.getByText("10.000.000");

      expect(spainPopulation.textContent).toBe("Population: 47.000.000");
      expect(portugalPopulation.textContent).toBe("Population: 10.000.000");
    });

    it("should render two links to '/Spain' and '/Portugal' pages", () => {
      const links = screen.getAllByRole("link") as HTMLAnchorElement[];

      expect(links[0].href.endsWith("/Spain")).toBeTruthy();
      expect(links[1].href.endsWith("/Portugal")).toBeTruthy();
    });
  });
});
