import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "android-chrome-512x512.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} alt="NEU Logo" />
    </div>
  );
}
