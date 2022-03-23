import type { NextPage } from "next";
import MenuList from "../../components/layout/menu-list";
import { motion, AnimatePresence } from "framer-motion";

const MenuPage: NextPage = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    //exit: { opacity: 0, x: 200, y: 0 },
  };
  const varTest = Math.random();

  return (
    <motion.div
      key={`${`modal${varTest}`}`}
      variants={variants}
      initial="hidden"
      animate="enter"
      //exit="exit"
      transition={{ type: "linear" }} // Set the transition to linear
    >
      <MenuList />
    </motion.div>
  );
};

export default MenuPage;
