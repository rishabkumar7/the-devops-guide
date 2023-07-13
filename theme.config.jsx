import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  // PROJECT INFO
  logo: (
    <>
    <img src="https://res.cloudinary.com/rishabkumar7/image/upload/v1689261605/thedevopsguide/The_DevOps_Guide_-_Badge_sbxhyi.png" alt="The DevOps Guide" width="4%" height="4%" />
    <br />
    <span>The DevOps Guide</span>
    </>
  ),
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
      <link rel="apple-touch-icon" sizes="180x180" href="/logos/favicon_io/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logos/favicon_io/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/logos/favicon_io/favicon-16x16.png"/>
      <link rel="manifest" href="/logos/favicon_io/site.webmanifest"/>
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