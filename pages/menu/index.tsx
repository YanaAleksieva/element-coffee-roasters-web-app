import { motion } from "framer-motion";

import MenuList from "../../components/layout/menu-list";

import type { NextPage } from "next";

const MenuPage: NextPage = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 200 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <MenuList />
    </motion.div>
  );
};

export default MenuPage;
