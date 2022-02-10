declare module 'dogBreeds.json' {
  // We can import any type for usage in module declaration as long as it is absolute import
  import type { BREED } from 'dogs';
  const value: `${BREED}`[];
  export default value;
}