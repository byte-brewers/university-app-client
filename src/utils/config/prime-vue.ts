import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const colorTheme = {
  primary: {
    inverseColor: '{zinc.50}',
    activeColor: '{zinc.800}',
    hoverColor: '{zinc.900}',
    color: '{zinc.950}',
  },
};

export const themes = definePreset(Aura, {
  semantic: { colorScheme: colorTheme },
});
