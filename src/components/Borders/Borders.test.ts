import { render, screen } from "@testing-library/vue";
import Borders from "./Borders.vue";
import router from "@/router";

global.fetch = vi.fn().mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          name: {
            common: "Spain",
          },
        },
      ]),
  })
);

describe("Borders component", () => {
  render(Borders, {
    props: {
      borders: ["ESP"],
    },
    global: {
      plugins: [router],
    },
  });

  describe("when it receives borders 'ESP'", () => {
    it("should render a label 'Spain'", () => {
      const spainLabel = screen.getByText("Spain");

      expect(spainLabel).toBeDefined();
    });
  });
});
