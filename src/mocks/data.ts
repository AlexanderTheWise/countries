import type { SimpleCountries } from "@/types";

const countries: SimpleCountries = [
  {
    name: { common: "Spain", nativeName: { spa: { common: "España" } } },
    capital: ["Madrid"],
    flags: {
      alt: "The spain flag is called rojigualda",
      png: "spain-flag.png",
    },
    region: "Europe",
    population: 47e6,
  },
  {
    name: { common: "Portugal", nativeName: { spa: { common: "Portugal" } } },
    capital: ["Lisboa"],
    flags: {
      alt: "The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3",
      png: "portugal-flag.png",
    },
    population: 10e6,
    region: "Europe",
  },
];

export default countries;
