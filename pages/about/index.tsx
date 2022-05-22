import { Fragment } from "react";
import Head from "next/head";

import AboutSummary from "../../components/about-details/about-summary";

import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Element Coffee Roasters ЗА НАС</title>
        <meta
          name="description"
          content="Element Coffee Roasters e семейна кафе пекарна в Стара Загора, България, предлагаща изключително прясно изпечено кафе"
        />
      </Head>
      <AboutSummary />
    </Fragment>
  );
};

export default AboutPage;
