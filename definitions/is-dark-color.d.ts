declare module 'is-dark-color' {
  type HexColor = `#${string}`;
  type Options = {
    override?: Record<HexColor, boolean>
  };
  const isDarkColor: (hex: HexColor, options?: Options) => boolean;
  export type { HexColor };
  export default isDarkColor;
}