import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'nl-NL',

  title: 'Boekencollectie van FerRory',
  description: 'Op deze website kun je de boekencollectie van FerRory vinden. De boekencollectie is verdeeld in drie categoriën: Devops, Persoonlijke Financiën en Zelf verbetering.',

  theme: defaultTheme({
    
    navbar: ['/', '/boeken'],
  }),

  bundler: viteBundler(),
})
