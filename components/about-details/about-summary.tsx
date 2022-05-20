import Link from "next/link";
import { Fragment } from "react";
import DescriptionPage from "../layout/description-page";

import classes from "./about-summary.module.css";

const AboutSummary = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.section}>
          <div className={classes.detail}>
            <p className={classes.textName}>
              Локация на магазин Element Coffee Roasters:
            </p>
            <p className={classes.textDetail}>
              гр. Стара Загора, ул. Димитър Наумов 70
            </p>
          </div>
          <div className={classes.detail}>
            <p className={classes.textName}>Телефон за връзка/поръчки: </p>
            <p className={classes.textDetail}>+359 88 479 7867</p>
          </div>
          <div className={classes.detail}>
            <p className={classes.textName}>Email адрес за запитвания: </p>
            <p className={classes.textDetail}>elmntcoffee@gmail.com</p>
          </div>
        </div>
        <div className={classes.section}>MAPS ADDED HERE</div>
      </div>
      <DescriptionPage
        imgUrl={"/images/about-us.JPG"}
        imgAlt={"photo-girl-infront-of-our-coffee-shop"}
      >
        Element Coffee Roasters е малка семейна кафе пекарна в Стара Загора,
        която започна да функционира 2018г. Преди това имахме малък магазин за
        кафе, където продавахме единствено внесени от Испания кафета, но с
        течение на времето и нашата голяма любов към кафето решихме ние да
        подберем зелените кафета, да ги изпичаме и винаги да имаме прясно
        изпечено кафе за нашите клиенти, и ние да избираме крайщата от света от
        където нашето кафе произлиза. С годините старозагорци заобичаха нашето
        кафе, а ние се наслаждаваме с многобройните хора доверяващи се на нашето
        прясно изпечено кафе. Вярваме, че е важно какаво кафе пиеш, наслажвайки
        се на вкуса и изживяването, а ние сме там, за да препоръчаме най-доброто
        кафе за всеки вкус.
      </DescriptionPage>
      <section className={classes.contacts}>
        <div className={classes.contactsList}>
          <Link href="https://www.facebook.com/elmnt.roasters">Facebook</Link>
          <Link href="mailto:elmntcoffee@gmail.com">Send a mail</Link>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutSummary;
