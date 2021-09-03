import { graphql, useStaticQuery } from 'gatsby'


function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  // Return directly wanted data
  return data.site.siteMetadata
}

export default useSiteMetadata
