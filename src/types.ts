export interface Country {
  name: {
    common: string;
    nativeName: Record<string, { common: string }>;
  };
  capital: string[];
  tld: string[];
  region: string;
  subregion: string;
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
  borders: string[];
  flags: {
    png: string;
    alt: string;
  };
  population: number;
}

export type SimpleCountry = Pick<
  Country,
  "capital" | "population" | "region" | "name" | "flags"
>;

export type SimpleCountries = SimpleCountry[];
