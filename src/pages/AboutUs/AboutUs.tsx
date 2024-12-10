

import img4 from "@assets/pexels-aggeliki-siomou-3384790-10815282.jpg"
// import smallImg from "@assets/download (2).jfif"

import styles from "./styles.module.css";
const { aboutUsContainer, textContent, tagline, title, description, readMoreBtn, imageContent, showcaseImage  } = styles;

const AboutUs = () => {
  return (
<div className={aboutUsContainer}>
<div className={textContent}>
  <h5 className={tagline}>EVERYDAY QUALITY</h5>
  <h1 className={title}>
    MADE <em>to</em> WITHSTAND <em>the</em> WEARS OF LIFE.
  </h1>
  <p className={description}>
    From your daily routines, to work matters,
     and special occasions, 
     our pieces are made to add an understated luxury for all of your life's
    moments.
  </p>
  <p className={description}>
    And because those who are refined by fire can endure more than we
    think, the same goes for our pieces – made for durable wearability.
    Wellanee was born with your individuality at heart, and at hand.
  </p>
  <button className={readMoreBtn}>
    <a href="/about-us">Read More</a>
    </button>
</div>
<div className={imageContent}>
  <img
    src={img4}
    alt="Jewelry pieces and model"
    className={showcaseImage}
  />
</div>
</div>
  )
};

export default AboutUs;



