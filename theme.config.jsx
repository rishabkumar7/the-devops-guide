import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  // PROJECT INFO
  logo: <span>The DevOps Guide</span>,
  project: {
    link: 'https://github.com/rishabkumar7/the-devops-guide',
  },
  docsRepositoryBase: 'https://github.com/rishabkumar7/the-devops-guide/blob/main/',
  banner: {
    key: 'devops-guide-github',
    text: <a href="https://github.com/rishabkumar7/the-devops-guide/" target="_blank">
      🎉 If you find the guide helpful, consider giving us a star on GitHub →
    </a>,
  },
  // HEAD
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://thedevops.guide${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'The DevOps Guide'} />
      <meta property="og:description" content={frontMatter.description || 'Free and Open Source guide for DevOps'} />
      <meta property="og:image" content='/logos/TheDevOpsGuide-logos.jpeg' />
    </>
  },
  // FOOTER 
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://thedevops.guide" target="_blank">The DevOps Guide</a> made with ❤️ <a href="https://rishabkumar.com" target="_blank">Rishab</a>
    </span>,
  }
  // ...
}