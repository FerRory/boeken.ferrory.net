import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'nl-NL',

  title: 'Boeken van FerRory',
  description: 'De boekencollectie van FerRory is verdeeld in drie categoriën namelijk Devops, Persoonlijke Financiën en Zelf verbetering.',

  theme: defaultTheme({
    
    navbar: ['/', '/boeken'],
  }),

  bundler: viteBundler(),
})
