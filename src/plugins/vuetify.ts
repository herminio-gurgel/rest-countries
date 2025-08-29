import '../assets/main.scss'

import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          background: '#FCFCFC',
        },
      },
      dark: {
        colors: {
          background: '#202c36',
          surface: '#2b3844',
        },
      },
    },
  },
  defaults: {
    VAppBar: {
      VRow: {
        noGutters: true,
        class: 'app-width mx-auto my-auto',
        align: 'center',
      },
    },
    VMain: {
      class: 'app-width mx-auto w-100',
    },
  },
})

export default vuetify
