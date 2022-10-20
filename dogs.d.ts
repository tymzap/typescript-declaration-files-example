// declare keyword lets TypeScript compiler know that this module
// contains some JavaScript variable declarations

declare enum BREED {
  BULLDOG = 'bulldog',
  POMERANIAN = 'pomeranian',
  GOLDEN_RETRIEVER = 'goldenRetriever',
  SIBERIAN_HUSKY = 'siberianHusky',
  GREAT_DANE = 'greatDane'
}

type Dog = {
  name: string;
  breed: `${BREED}`;
};

declare const getRandomDog: () => Dog;

export {
  Dog,
  getRandomDog,
  BREED
}