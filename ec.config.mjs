import { defineEcConfig } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginFullscreen } from 'expressive-code-fullscreen';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'


export default defineEcConfig({
    themes : ["gruvbox-dark-medium"],
    defaultProps: {
        // Enable word wrap by default
        wrap: true,
        // Disable wrapped line indentation for terminal languages
        overridesByLang: {
          'bash,ps,sh': { preserveIndent: false },
        },
      },

    plugins: [
        pluginLineNumbers(), 
        pluginFullscreen(),
        pluginCollapsibleSections(),
    ],
})