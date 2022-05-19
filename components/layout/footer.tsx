import classes from "./footer.module.css";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.punchLine}>
          Made with lots of 
          <div className={classes.image}>
            <Image
              src="/images/coffee-draw.png"
              alt="coffee-beans"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          in Stara Zagora, Bulgaria
        </div>
        <div className={classes.copyright}>Element Coffee Roasters / 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
