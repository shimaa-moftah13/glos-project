import {ListGroup } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
// import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';


import styles from "./styles.module.css"
const ProfileLayout = () => {
  return (
    <>
  
      <div className={styles.ProfileLayout}>

      <div className={styles.left}>
      <ListGroup.Item as={NavLink} to="" end
          className={styles.listGroupItem}>
            <AccountCircleOutlinedIcon />
            <span>Account Info</span>
          </ListGroup.Item>

          <ListGroup.Item as={NavLink} to="orders" 
          className={styles.listGroupItem}>
            <LocalMallOutlinedIcon />
            <span>Orders</span>
          </ListGroup.Item>

          {/* <ListGroup.Item as={NavLink} to="adress" 
          className={styles.listGroupItem}>
            <FmdGoodOutlinedIcon />
            <span>Adress</span>
          </ListGroup.Item>

          <ListGroup.Item as={NavLink} to="changepassword"
          className={styles.listGroupItem}>
            <HttpsOutlinedIcon />
            <span>Change Password</span>
          </ListGroup.Item> */}
    </div>

    <div className={styles.right}>
        <Outlet />
      </div>
      </div>

     
    </>
  );
};

export default ProfileLayout;
