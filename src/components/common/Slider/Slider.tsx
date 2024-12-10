// import { useState } from "react"
import Slide1 from "@assets/Silver Double Hoop Earring.jpg"

import Slide2 from "@assets/download22.jpg"
import Slide3 from "@assets/download33.jpg"

// import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
// import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import styles from "./styles.module.css";
import { Link } from "react-router-dom";


const Slider = () => {

  return (
    <div className={styles.slider}>
        <div className={styles.slidercontainer}>
           <article className={styles.sliderArticle}>
           <img src={Slide1} alt="placholder" className={styles.sliderImg} />
           <div className={styles.sliderData}>
            <span className={styles.sliderDescription}>Lorem, ipsum dolor.</span>
            <h2 className={styles.sliderTitle}>Featured Products</h2>
            <Link to={"categories"}>
            <a className={styles.sliderButton}>View</a>
            </Link>
           </div>
            </article>

            <article className={styles.sliderArticle}>
           <img src={Slide2} alt="placholder" className={styles.sliderImg} />
           <div className={styles.sliderData}>
            <span className={styles.sliderDescription}>Lorem, ipsum dolor.</span>
            <h2 className={styles.sliderTitle}>Trending Products</h2>
            <Link to={"categories"}>
            <a className={styles.sliderButton}>View</a>
            </Link>

           </div>
            </article>

            <article className={styles.sliderArticle}>
           <img src={Slide3} alt="placholder" className={styles.sliderImg} />
           <div className={styles.sliderData}>
            <span className={styles.sliderDescription}>Lorem, ipsum dolor.</span>
            <h2 className={styles.sliderTitle}>New Season</h2>
            <Link to={"categories"}>
            <a className={styles.sliderButton}>View</a>
            </Link>
            

           </div>
            </article>
            
        </div>
    </div>
  )
}

export default Slider











