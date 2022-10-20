const { sample } = require('lodash');

const BREED = {
  BULLDOG: 'Bulldog',
  POMERANIAN: 'Pomeranian',
  GOLDEN_RETRIEVER: 'Golden Retriever',
  SIBERIAN_HUSKY: 'Siberian Husky',
  GREAT_DANE: 'Great Dane'
};

const dogs = [
  {
    name: 'Saruman',
    breed: BREED.GOLDEN_RETRIEVER
  },
  {
    name: 'Jon Snow',
    breed: BREED.POMERANIAN,
  },
  {
    name: 'Rincewind',
    breed: BREED.BULLDOG,
  },
  {
    name: 'Kaladin',
    breed: BREED.SIBERIAN_HUSKY,
  },
  {
    name: 'Anomander',
    breed: BREED.GREAT_DANE
  }
]

const getRandomDog = () => sample(dogs);

module.exports = {
  BREED,
  getRandomDog,
};