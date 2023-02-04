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
      🎉 If you liked the guide, conside giving us a star on GitHub →
    </a>,
  },
  // HEAD
  ead: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://thedevops.guide${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'The DevOps Guide'} />
      <meta property="og:description" content={frontMatter.description || 'Free and Open Source guide for DevOps'} />
    </>
  },
  // FOOTER 
  footer: {
    text: <span>
      MIT {new Date().getFullYear()} © <a href="https://thedevops.guide" target="_blank">The DevOps Guide</a>.
    </span>,
  }
  // ...
}