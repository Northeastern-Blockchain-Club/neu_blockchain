import * as React from "react";
import Layout from "../components/Layout";

import ContactCard from "../components/ContactCard";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactPage = () => {
  return (
    <Layout>
      <ContactCard />
    </Layout>
  );
};

export default ContactPage;
