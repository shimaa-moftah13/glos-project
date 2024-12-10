
import { useAppSelector } from "@store/hooks";
import Profile from "@assets/6b93df17-20a2-4fc9-af32-a4cf8eb42a18.jpg"

import styles from "./styles.module.css"

const AccountInfo = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);

  return (
    <>


<div className={styles.container}>
      {/* Left Section */}
      <div className={styles.profileCard}>
        <img
          className={styles.profileImage}
          src={Profile}
          alt="Profile"
        />
        <p className={styles.location}>Hello</p>
        <h2 className={styles.name}>{accountInfo?.firstName} {accountInfo?.lastName}</h2>
      </div>

      {/* Right Section */}
      <div className={styles.userInfo}>
        <h2 className={styles.userProfileHeading}>User Profile</h2>
        <div className={styles.infoItem}>
          <span className={styles.label}>First Name:  
             <span className={styles.info}>{accountInfo?.firstName}</span></span>
          
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Last Name:
          <span className={styles.info}>{accountInfo?.lastName}</span>
          </span>
          
        </div>
        <div className={styles.infoItem}>
          <span className={styles.label}>Email:         
          <span className={styles.info}>{accountInfo?.email}</span>
          </span>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default AccountInfo;
