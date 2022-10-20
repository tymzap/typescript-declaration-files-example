import { sample } from 'lodash';
import { getRandomDog, Dog, BREED } from 'dogs';
import dogBreeds from 'dogBreeds.json';

const createDog = (name: string, breed: `${BREED}`): Dog => ({
  name,
  breed
})

const randomDog = getRandomDog();

const newDog = createDog('Tabaluga', sample(dogBreeds)!);

console.log('Meet our random dog:', `${randomDog.name} the ${randomDog.breed}`);
console.log('Meet our new dog:', `${newDog.name} the ${newDog.breed}`);