import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'nl-NL',

  title: 'Boekencollectie van (Fer)Rory',
  description: 'Op deze website kun je de boekencollectie van (Fer)Rory vinden. De boekencollectie is verdeeld in drie categoriën: Devops, Persoonlijke Financiën en Zelf verbetering.',

  theme: defaultTheme({
    
    navbar: ['/', '/boeken.md'],
  }),

  bundler: viteBundler(),
})
