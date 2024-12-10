import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/common";

import styles from "./styles.module.css";
const { container, wrapper} = styles;

const MainLayout = () => {
  return (
    <div className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
