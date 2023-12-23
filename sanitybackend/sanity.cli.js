import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nb1z0581',
    dataset: 'production'
  },
  media: {
    provider: "sanity"
  }
})
