import { Fragment } from "react";
import Head from "next/head";

import DescriptionPage from "../../components/layout/description-page";

import type { NextPage } from "next";

const OrderPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Element Coffee Roasters ПОРЪЧАЙ</title>
        <meta
          name="description"
          content="За да поръчате кафе от Element Coffee Roasters, моля обадете се на посочения номер или ни посетете в нашия магазин - гр. Стара
          Загора, ул. Димитър Наумов 70"
        />
      </Head>
      <DescriptionPage
        imgUrl={"/images/cover-wider.png"}
        imgAlt={"coffee-shop-photo"}
      >
        За да поръчате, моля обадете се на посочения номер в секцията ЗА НАС
        (доставките могат да бъдат с Еконт или Спийди, по желание на клиента,
        като таксата е определената от доставчика), пишете ни съобщение на
        Facebook страницата или заповядайте лично в нашия магазин - гр. Стара
        Загора, ул. Димитър Наумов 70.
      </DescriptionPage>
    </Fragment>
  );
};

export default OrderPage;
