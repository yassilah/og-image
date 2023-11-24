import { joinURL } from 'ufo'
import type { OgImageOptions } from '../../src/runtime/types'
import { useAsyncData } from '#imports'
import { host, path, refreshTime } from '~/util/logic'

export function fetchPathDebug() {
  return useAsyncData<{ siteConfig: { url?: string }, options: OgImageOptions, vnodes: Record<string, any> }>(() => {
    return $fetch(joinURL('/__og-image__/image', path.value, 'og.json'), {
      baseURL: host.value,
    })
  }, {
    watch: [path, refreshTime],
  })
}

export function fetchGlobalDebug() {
  return useAsyncData<{ componentNames: { pascalName: string }[] }>(() => {
    return $fetch('/__og-image__/debug.json', {
      baseURL: host.value,
    })
  }, {
    watch: [path, refreshTime],
  })
}
