import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

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
      <h1>About</h1>
    </Fragment>
  );
};

export default AboutPage;
