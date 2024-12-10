import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import logo from "@assets/Screenshot_2024-09-19_113925-removebg-preview.png"


import styles from "./styles.module.css";
const {footerContainer, footerLogo, footerNav, footerSocial} = styles;

const Footer = () => {
  return (
    <footer className={footerContainer}>
    {/* Logo */}
    <div className={footerLogo}>
    <img src={logo} alt="" height="60px" />
    </div>
  
    {/* Bottom navigation links */}
    <nav className={footerNav}>
      <a href="#brand-directory">BRAND DIRECTORY</a>
      <a href="#case-studies">CASE STUDIES</a>
      <a href="#blog">BLOG</a>
      <a href="#pricing">PRICING</a>
      <a href="#faq">FAQ</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </nav>
  
    {/* Social media icons */}
    <div className={footerSocial}>
      <InstagramIcon/>
      <FacebookOutlinedIcon/>
      <PinterestIcon/>
    </div>
  </footer>  );
};

export default Footer;
