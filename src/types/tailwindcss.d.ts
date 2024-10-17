declare module 'tailwindcss/lib/util/flattenColorPalette' {
  import { Theme } from 'tailwindcss';

  function flattenColorPalette(color: Theme['colors']): Record<string, string>;
  export default flattenColorPalette;
}

