import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#7367F0',
          secondary: '#82868b',
          accent: '#00CFE8',
          error: '#EA5455',
          info: '#00CFE8',
          success: '#28C76F',
          warning: '#FF9F43',
        },
      },
    },
  },
});
