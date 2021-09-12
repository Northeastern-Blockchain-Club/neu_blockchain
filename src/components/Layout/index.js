import * as React from "react";

// imported 3rd party libraries
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// Custom components and hooks
import Header from "../Header/index";
import useSiteMetadata from "../Hooks/useMetadata.js";

// styles
import theme from "../../Theme/theme.js";
import "../../styles/main.scss";
import "@fontsource/roboto";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <CssBaseline />
      <div>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
