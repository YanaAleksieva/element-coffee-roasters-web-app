import type { NextPage } from "next";
import { Fragment } from "react";
import DescriptionPage from "../../components/layout/description-page";

const OrderPage: NextPage = () => {
  return (
    <Fragment>
      <DescriptionPage imgUrl={"/images/cover-wider.png"} imgAlt={"coffee-shop-photo"}>
        За да поръчате, моля обадете се на посочения номер в секцията ЗА НАС,
        пишете ни съобщение на Facebook страницата или заповядайте лично в нашия
        магазин - гр. Стара Загора, ул. Димитър Наумов 70.
      </DescriptionPage>
    </Fragment>
  );
};

export default OrderPage;
