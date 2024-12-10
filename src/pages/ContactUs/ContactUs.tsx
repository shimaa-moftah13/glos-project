
// import banner from "@assets/contactus.jpg"
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styles from "./styles.module.css";
const { contactSection, contactContainer, contactInfo, contactForm, info, formBox, 
  inputBox, inputBoxx, icons } = styles;

const ContactUs = () => {
  return (
    <section className={contactSection}>
 <div className={contactContainer}>

    <div className={contactInfo}>
      <div >
      <h2>CONTACT FORM</h2>
      <ul className={info}>
        <li>
          <span>
            <LocationOnSharpIcon />
          </span>
          <span>
            online store
          </span>
        </li>
        <li>
          <span>
            <EmailSharpIcon />
          </span>
          <span>
            glos@gmail.com
          </span>
        </li>
        <li>
          <span>
            <CallSharpIcon/>
          </span>
          <span>
            00000000000
          </span>
        </li>
      </ul>
      </div>
      <div className={icons}>
        <a href="#"><InstagramIcon/></a>
        <a href="#"><FacebookOutlinedIcon/></a>
        <a href="#"><PinterestIcon/></a>
        <a href="#"><TwitterIcon/></a>
        <a href="#"><LinkedInIcon/></a>
        


    </div>
        
    </div>
    
    <div className={contactForm}>
    <h2>Send a Massege</h2>
    <div className={formBox}>
      <div className={inputBox}>
        <input type="text" required />
        <span>First Name</span>
      </div>
      <div className={inputBox}>
        <input type="text" required />
        <span>Last Name</span>
      </div>
      <div className={inputBox}>
        <input type="email" required />
        <span>Email</span>
      </div>
      <div className={inputBox}>
        <input type="text" required />
        <span>Mobile Number</span>
      </div>
      <div className={inputBoxx}>
        <textarea required></textarea>
        <span>Write your message here...</span>
      </div>
      <div className={inputBoxx}>
        <input type="submit" value="send"/>
      </div>
    </div>
    </div>

   
    {/* <div className={formOverlay}>
      
      <p>
        Thank you for your interest in our work!<br />
        If you want to book a shoot or discuss its details, leave your contact information,
        and I will definitely contact you in 24 hours.<br />
        Please indicate a convenient time for a call.
      </p>
      <form className={form}>
        <div className={formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  />
        </div>
        <div className={formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={emaiInput} />
        </div>
        <button type="submit" className={submitButton}>Send ...</button>
      </form>
    </div> */}

   
  </div>
    </section>
   
  )
}

export default ContactUs