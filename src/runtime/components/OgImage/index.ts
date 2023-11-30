import { defineComponent } from 'vue'
import type { OgImageOptions } from '../../types'
import { defineOgImage } from '#imports'

export default defineComponent<OgImageOptions>({
  name: 'OgImage',
  async setup(_, { attrs }) {
    if (import.meta.server)
      // just use defaults
      defineOgImage(attrs)

    return () => null
  },
})
