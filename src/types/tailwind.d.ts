// types/tailwindcss.d.ts
import 'tailwindcss/types/config';
import { Theme, PluginAPI } from 'tailwindcss';

// Declare the module for flattenColorPalette
declare module 'tailwindcss/lib/util/flattenColorPalette' {
  function flattenColorPalette(color: Theme['colors']): Record<string, string>;
  export default flattenColorPalette;
}

// Declare the module for PluginUtils
declare module 'tailwindcss/types/config' {
  interface MatchUtilitiesOptions {
    values?: Record<string, string>;
    type?: string | string[]; // Adjusted to match expected types
    respectPrefix?: boolean; // Added to match the expected interface
    respectImportant?: boolean; // Added to match the expected interface
  }

  interface PluginUtils extends PluginAPI { // Extend from PluginAPI
    matchUtilities: (
      utilities: Record<string, (value: string) => Record<string, string>>,
      options?: MatchUtilitiesOptions
    ) => void;
  }
}
